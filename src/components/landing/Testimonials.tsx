import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Потрясающий сервис и безупречный результат. Улыбка мечты!",
    name: "Анна К.",
  },
  {
    quote: "Имплантация прошла идеально. Ни боли, ни стресса.",
    name: "Дмитрий Л.",
  },
  {
    quote: "Виниры выглядят естественно и дорого. Рекомендую!",
    name: "Екатерина В.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl mb-8">Отзывы пациентов</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <article className="h-full rounded-lg border bg-card p-6 shadow-sm flex flex-col justify-between">
                  <p className="text-lg">“{t.quote}”</p>
                  <span className="mt-6 text-sm text-muted-foreground">{t.name}</span>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
