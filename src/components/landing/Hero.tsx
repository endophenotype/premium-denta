import heroImage from "@/assets/hero-dental-premium.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Премиальная стоматология — идеальная улыбка в роскошном интерьере"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-28 flex flex-col items-start justify-end gap-6">
        <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl animate-fade-in">
          Элитная стоматология с безупречной репутацией
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in">
          Лечение, имплантация и эстетика уровня VIP
        </p>
        <div className="pt-2 animate-scale-in">
          <a href="#booking">
            <Button variant="hero" size="xl" className="hover-scale">
              Записаться на консультацию
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
