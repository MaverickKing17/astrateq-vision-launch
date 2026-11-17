-- Astrateq Gadgets — Consumer Market Research & Beta Registration Schema
-- Run this migration in your Supabase SQL Editor to enable live survey and beta persistence.

create extension if not exists pgcrypto;

-- 1. Anonymous Consumer Market Research Surveys (strictly separate from PII / beta emails)
create table if not exists public.market_research_surveys (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  started_at timestamptz null,
  completed_at timestamptz not null default now(),
  completion_seconds integer null check (completion_seconds is null or completion_seconds >= 0),

  -- Survey responses (null allowed when respondent skips a question)
  driving_frequency text null,
  product_interest text null,
  valuable_capabilities text[] not null default '{}',
  valuable_capabilities_other text null,
  privacy_importance text null,
  adoption_concerns text[] not null default '{}',
  adoption_concerns_other text null,
  everyday_usage_likelihood text null,
  additional_feedback text null,
  skipped_questions text[] not null default '{}',

  -- Research context & campaign attribution
  locale text not null default 'en-CA',
  source text not null default 'web_survey',
  utm_source text null,
  utm_medium text null,
  utm_campaign text null
);

-- 2. Separate Beta Interest Registrations (explicit CASL-aligned consent)
create table if not exists public.beta_registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  first_name text null,
  iphone_model text null,
  consent_marketing boolean not null default false,
  consent_timestamp timestamptz not null default now(),
  locale text not null default 'en-CA',
  source text not null default 'beta_section'
);

create unique index if not exists beta_registrations_email_lower_idx
  on public.beta_registrations (lower(email));

-- 3. Strict Row Level Security (RLS)
alter table public.market_research_surveys enable row level security;
alter table public.beta_registrations enable row level security;

-- Revoke public SELECT/UPDATE/DELETE so individual responses and emails are never exposed publicly
drop policy if exists "Allow anonymous survey inserts" on public.market_research_surveys;
create policy "Allow anonymous survey inserts"
  on public.market_research_surveys
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow beta registration inserts with consent" on public.beta_registrations;
create policy "Allow beta registration inserts with consent"
  on public.beta_registrations
  for insert
  to anon, authenticated
  with check (consent_marketing = true and length(trim(email)) > 3);

-- Note: SELECT is intentionally restricted to service_role (backend / internal admin only).

-- 4. Internal Market Research Aggregation Views (for future admin dashboard via service_role)
create or replace view public.market_research_summary as
select
  (select count(*) from public.market_research_surveys) as total_survey_submissions,
  (select count(*) from public.market_research_surveys where array_length(skipped_questions, 1) is null or array_length(skipped_questions, 1) = 0) as full_completions,
  (select round(avg(completion_seconds)) from public.market_research_surveys where completion_seconds is not null) as avg_completion_seconds,
  (select count(*) from public.beta_registrations where consent_marketing = true) as total_beta_registrations;
