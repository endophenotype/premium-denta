import Hero from "@/components/landing/Hero";
import Advantages from "@/components/landing/Advantages";
import Services from "@/components/landing/Services";
import About from "@/components/landing/About";
import Testimonials from "@/components/landing/Testimonials";
import BookingForm from "@/components/landing/BookingForm";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const title = "Премиальная стоматология — VIP лечение и эстетика | Premium Dental";
  const description = "Элитная стоматология: имплантация, эстетика, исправление прикуса. Комфорт без боли, гарантия качества, VIP-сервис.";
  const canonical = "https://example.com/";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Premium Dental",
            url: canonical,
            telephone: "+7 (000) 000-00-00",
            address: { "@type": "PostalAddress", addressLocality: "Барнаул" },
          })}
        </script>
      </Helmet>
      <header className="sr-only">
        <h1>Премиальная стоматология Premium Dental</h1>
      </header>
      <main>
        <Hero />
        <Advantages />
        <Services />
        <About />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
