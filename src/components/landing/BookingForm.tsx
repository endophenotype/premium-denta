import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z.string().min(6, "Введите телефон").regex(/^[+0-9()\-\s]+$/, "Некорректный номер"),
  service: z.string().min(2, "Выберите услугу"),
});

type FormValues = z.infer<typeof schema>;

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { service: "Имплантация" }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Lead:", data);
    toast({ title: "Заявка отправлена", description: "Мы свяжемся с вами в ближайшее время." });
    reset();
  };

  return (
    <section id="booking" className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl mb-4">Запись на прием</h2>
        <p className="text-muted-foreground mb-8">Конфиденциально. Не передаем данные третьим лицам.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div>
            <Input placeholder="Ваше имя" aria-label="Имя" {...register("name")} />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <Input placeholder="Телефон" aria-label="Телефон" {...register("phone")} />
            {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
          </div>
          <div>
            <Select onValueChange={(v) => setValue("service", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Имплантация">Имплантация</SelectItem>
                <SelectItem value="Эстетика">Эстетическая стоматология</SelectItem>
                <SelectItem value="Прикус">Исправление прикуса</SelectItem>
                <SelectItem value="Терапия">Лечение зубов</SelectItem>
              </SelectContent>
            </Select>
            {errors.service && <p className="text-destructive text-sm mt-1">{errors.service.message}</p>}
          </div>
          <div className="pt-2">
            <Button type="submit" variant="gold" size="xl" className="w-full md:w-auto">Отправить заявку</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
