import type { ReactNode } from "react";
import { SidebarNav } from "./SidebarNav";

interface ShellProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function Shell({ title, description, actions, children }: ShellProps) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <SidebarNav />
      <main className="flex-1 min-w-0">
        <header className="h-16 border-b border-border bg-background/80 backdrop-blur sticky top-0 z-10">
          <div className="h-full px-6 lg:px-8 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-lg font-semibold tracking-tight truncate">{title}</h1>
              {description ? (
                <p className="text-xs text-muted-foreground truncate">{description}</p>
              ) : null}
            </div>
            {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
          </div>
        </header>
        <div className="px-6 lg:px-8 py-6 lg:py-8">{children}</div>
      </main>
    </div>
  );
}
