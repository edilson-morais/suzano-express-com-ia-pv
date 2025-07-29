import Navigation from "@/components/Navigation";
import SuzanoHero from "@/components/suzano/SuzanoHero";
import SuzanoAbout from "@/components/suzano/SuzanoAbout";
import SuzanoMethod from "@/components/suzano/SuzanoMethod";
import SuzanoPricing from "@/components/suzano/SuzanoPricing";
import SuzanoTestimonials from "@/components/suzano/SuzanoTestimonials";
import SuzanoFAQ from "@/components/suzano/SuzanoFAQ";
import SuzanoFooter from "@/components/suzano/SuzanoFooter";

const SuzanoExpress = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SuzanoHero />
      <SuzanoAbout />
      <SuzanoMethod />
      <SuzanoPricing />
      <SuzanoTestimonials />
      <SuzanoFAQ />
      <SuzanoFooter />
    </div>
  );
};

export default SuzanoExpress;