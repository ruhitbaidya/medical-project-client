import Banner from "@/components/Home/Banner";
import MedicalIconsSlider from "@/components/Home/MedicalIconSlider";
import Services from "@/components/Home/Services";
import DoctorCategoriesSection from "@/components/Home/SpeacalDoctorSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <DoctorCategoriesSection />
      <MedicalIconsSlider />
    </div>
  );
};

export default HomePage;
