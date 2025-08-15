import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl mb-8">Услуги</h2>
        <Tabs defaultValue="implants" className="w-full">
          <TabsList className="flex flex-wrap gap-2">
            <TabsTrigger value="implants">Имплантация</TabsTrigger>
            <TabsTrigger value="aesthetics">Эстетика</TabsTrigger>
            <TabsTrigger value="bite">Исправление прикуса</TabsTrigger>
            <TabsTrigger value="therapy">Лечение зубов</TabsTrigger>
          </TabsList>
          <TabsContent value="implants" className="mt-6">
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Имплантация под ключ</li>
              <li>All-on-4 / All-on-6</li>
              <li>Надёжные системы с гарантией</li>
            </ul>
          </TabsContent>
          <TabsContent value="aesthetics" className="mt-6">
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Виниры премиум-класса</li>
              <li>Отбеливание без чувствительности</li>
              <li>Комплексные smile-дизайны</li>
            </ul>
          </TabsContent>
          <TabsContent value="bite" className="mt-6">
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Элайнеры нового поколения</li>
              <li>Брекет-системы под ключ</li>
              <li>Диагностика и план лечения</li>
            </ul>
          </TabsContent>
          <TabsContent value="therapy" className="mt-6">
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Лечение без сверления (лазер)</li>
              <li>Микроскопная терапия</li>
              <li>Профилактика и гигиена</li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
