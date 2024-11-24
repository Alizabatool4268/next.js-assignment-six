import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import SecctionOne from "@/components/SecctionOne";
import CoursesCatalog from "@/components/coursescatalog";
import Achievements from "@/components/Achievements";
import Coursescards from "@/components/Coursescards";
import TeamMembers from "@/components/TeamMembers";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
     <div className="overflow-x-hidden">
      <Header />
      <Herosection />
      <SecctionOne />
      <CoursesCatalog />
      <Achievements />
      <Coursescards />
      <TeamMembers />
      <CustomerTestimonials />
      <Footer />

    </div>
  );
}
