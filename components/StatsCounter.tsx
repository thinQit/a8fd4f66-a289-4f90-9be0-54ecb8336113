"use client";

interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  bgColor?: string;
}

export default function StatsCounter({
  stats = [
    { value: "18+", label: "Years of Hospitality" },
    { value: "250K+", label: "Guests Served" },
    { value: "4.9★", label: "Average Guest Rating" },
    { value: "60+", label: "Seasonal Dishes Yearly" },
  ],
  bgColor = "bg-primary text-primary-foreground",
}: Partial<StatsCounterProps>) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up">
          <div className="grid gap-8 text-center grid-cols-2 md:grid-cols-4">
            {stats.map(function (stat, i) {
              return (
                <div key={i} className="card-hover rounded-xl border border-border/30 bg-background/10 p-6">
                  <p className="text-4xl font-bold md:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-wider opacity-80">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
