import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-white">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-white">Page not found</h2>
        <p className="mt-2 text-sm text-[#9299A5]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#00E5FF] px-5 py-2.5 text-sm font-semibold text-[#050505] transition-opacity hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-white">
          This page didn&apos;t load
        </h1>
        <p className="mt-2 text-sm text-[#9299A5]">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#00E5FF] px-5 py-2.5 text-sm font-semibold text-[#050505] transition-opacity hover:opacity-90 cursor-pointer"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/15 bg-[#0B0F19] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#141A24]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const defaultTitle = "Astrateq.ai — Intelligent Driver Awareness for iPhone";
const defaultDescription =
  "Meet Astrateq: an iOS driver-awareness application designed to monitor visual indicators of distraction and drowsiness using on-device intelligence.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#050505" },
      { title: defaultTitle },
      { name: "description", content: defaultDescription },
      { name: "author", content: "Astrateq.ai" },
      { property: "og:site_name", content: "Astrateq.ai" },
      { property: "og:locale", content: "en_CA" },
      { property: "og:title", content: defaultTitle },
      { property: "og:description", content: defaultDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: defaultTitle },
      { name: "twitter:description", content: defaultDescription },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
