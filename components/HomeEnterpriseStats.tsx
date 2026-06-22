import { homeEnterpriseStats } from "@/data/homeEnterpriseStats";

export default function HomeEnterpriseStats() {
  return (
    <section className="enterprise-stats-strip" aria-label="Company highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="enterprise-stats-grid">
          {homeEnterpriseStats.map((stat) => (
            <li key={stat.label} className="enterprise-stat">
              <p className="enterprise-stat__value font-heading">{stat.value}</p>
              <p className="enterprise-stat__label">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
