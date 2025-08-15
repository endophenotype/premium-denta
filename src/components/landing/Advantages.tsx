import { ShieldCheck, BadgeCheck, Cpu, Crown, Stethoscope, Users2 } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Безболезненно", desc: "Седация и наркоз — комфорт на каждом этапе" },
  { icon: Users2, title: "Опыт 20+ лет", desc: "Топ-врачи с международной практикой" },
  { icon: Cpu, title: "High-tech", desc: "3D-диагностика, цифровые слепки" },
  { icon: BadgeCheck, title: "Гарантия", desc: "Пожизненная на импланты" },
  { icon: Crown, title: "VIP-сервис", desc: "Индивидуальный подход и приватность" },
  { icon: Stethoscope, title: "Забота", desc: "Полное сопровождение после лечения" },
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl mb-10">Почему нам доверяют</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Icon />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
