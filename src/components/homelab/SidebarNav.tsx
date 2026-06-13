import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Server, Boxes, Globe, Network, Activity } from "lucide-react";

const items = [
  { to: "/", label: "Übersicht", icon: LayoutDashboard, exact: true },
  { to: "/hosts", label: "Hosts", icon: Server, exact: false },
  { to: "/containers", label: "Container", icon: Boxes, exact: false },
  { to: "/services", label: "Services", icon: Globe, exact: false },
  { to: "/network", label: "Netzwerk", icon: Network, exact: false },
] as const;

export function SidebarNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden md:flex md:w-60 lg:w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex items-center gap-2.5 px-5 h-16 border-b border-sidebar-border">
        <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary/15 ring-1 ring-primary/30">
          <Activity className="h-5 w-5 text-primary" />
        </div>
        <div className="leading-tight">
          <div className="font-semibold text-sidebar-foreground">Homelab</div>
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Control</div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {items.map((item) => {
          const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={[
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                active
                  ? "bg-sidebar-accent text-sidebar-foreground ring-1 ring-border"
                  : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
              ].join(" ")}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-5 py-4 border-t border-sidebar-border text-[11px] text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="status-dot status-dot-online" />
          <span>Agent verbunden</span>
        </div>
        <div className="mt-1 font-mono opacity-60">v0.1.0 · mock</div>
      </div>
    </aside>
  );
}
