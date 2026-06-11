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
    <div className="flex min-h-screen items-center justify-center bg-sand px-4">
      <div className="max-w-md text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold mb-6">
          Error 404
        </p>
        <h1 className="font-display text-6xl text-navy mb-6">Page unavailable</h1>
        <p className="text-sm text-slate leading-relaxed mb-8">
          The page you were looking for is no longer in our directory. Return to the
          main practice or contact our advisory desk.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-navy text-sand text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-gold transition-colors"
        >
          Return Home
        </Link>
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
    <div className="flex min-h-screen items-center justify-center bg-sand px-4">
      <div className="max-w-md text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold mb-6">
          Service interrupted
        </p>
        <h1 className="font-display text-4xl text-navy mb-4">This page didn't load</h1>
        <p className="text-sm text-slate leading-relaxed mb-8">
          Something went wrong on our end. Refresh to try again or return to the
          practice homepage.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="px-6 py-3 bg-navy text-sand text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-gold transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-6 py-3 border border-navy/20 text-navy text-[11px] uppercase tracking-[0.2em] font-semibold hover:border-navy transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Etihad Consultancy & Business Services LLC — Abu Dhabi" },
      {
        name: "description",
        content:
          "Corporate formation, strategic advisory, licensing, immigration & government relations for ambitious investors and organisations in the UAE.",
      },
      { name: "author", content: "Etihad Consultancy & Business Services LLC" },
      { property: "og:site_name", content: "Etihad Consultancy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
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
      <Outlet />
    </QueryClientProvider>
  );
}
