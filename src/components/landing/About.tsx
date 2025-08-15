import team from "@/assets/team-elite-dentists.jpg";
import interior from "@/assets/clinic-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h2 className="font-display text-3xl md:text-4xl">О клинике</h2>
          <p className="text-muted-foreground text-lg">
            Мы создаем идеальные улыбки с 2010 года. Современные технологии, опытная команда и сервис уровня luxury.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Сертифицированные специалисты международного уровня</li>
            <li>• Премиальные кабинеты и стерильность по протоколам</li>
            <li>• Прозрачные планы лечения и сопровождение 24/7</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={team} alt="Команда элитных стоматологов" className="rounded-lg object-cover w-full h-56 md:h-72 shadow" loading="lazy" />
          <img src={interior} alt="Премиальный интерьер клиники" className="rounded-lg object-cover w-full h-56 md:h-72 shadow translate-y-6" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default About;
