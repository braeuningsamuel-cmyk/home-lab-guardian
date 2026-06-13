import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Shell } from "@/components/homelab/Shell";
import { StatusBadge } from "@/components/homelab/StatusBadge";
import { MetricBar } from "@/components/homelab/MetricBar";
import { getHosts } from "@/lib/homelab/api";
import { formatBytes, formatUptime, pct } from "@/lib/homelab/format";
import { Cpu, HardDrive, MemoryStick, Wifi } from "lucide-react";

export const Route = createFileRoute("/hosts")({
  head: () => ({
    meta: [
      { title: "Hosts · Homelab Control" },
      { name: "description", content: "Detaillierte Ansicht aller physischen und virtuellen Hosts." },
    ],
  }),
  component: HostsPage,
});

function HostsPage() {
  const { data: hosts = [] } = useQuery({ queryKey: ["hosts"], queryFn: getHosts });

  return (
    <Shell title="Hosts" description="Physische und virtuelle Maschinen">
      <div className="space-y-4">
        {hosts.map((host) => (
          <div key={host.id} className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold">{host.name}</h3>
                  <StatusBadge status={host.status} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground font-mono">
                  {host.hostname} · {host.ip} · {host.os}
                </div>
              </div>
              <div className="text-right text-xs">
                <div className="text-muted-foreground">Uptime</div>
                <div className="font-mono text-base text-foreground">{formatUptime(host.uptimeSeconds)}</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <Stat icon={Cpu} label="CPU">
                <MetricBar label={host.cpu.model} value={host.cpu.usage} hint={`${host.cpu.cores} Kerne`} />
              </Stat>
              <Stat icon={MemoryStick} label="Memory">
                <MetricBar
                  label="Genutzt"
                  value={pct(host.memory.usedGb, host.memory.totalGb)}
                  hint={`${host.memory.usedGb.toFixed(1)} / ${host.memory.totalGb} GB`}
                />
              </Stat>
              <Stat icon={HardDrive} label="Storage">
                <MetricBar
                  label="Genutzt"
                  value={pct(host.disk.usedGb, host.disk.totalGb)}
                  hint={`${formatBytes(host.disk.usedGb)} / ${formatBytes(host.disk.totalGb)}`}
                />
              </Stat>
              <Stat icon={Wifi} label="Network">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between"><span className="text-muted-foreground">Download</span><span className="font-mono">{host.network.rxMbps} Mbps</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Upload</span><span className="font-mono">{host.network.txMbps} Mbps</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Load</span><span className="font-mono">{host.loadAvg.map(l => l.toFixed(2)).join(" / ")}</span></div>
                </div>
              </Stat>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
}

function Stat({ icon: Icon, label, children }: { icon: typeof Cpu; label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-2">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      {children}
    </div>
  );
}
