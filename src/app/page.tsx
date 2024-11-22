import Image from "next/image";
import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import SecctionOne from "@/components/SecctionOne";
import CoursesCatalog from "@/components/coursescatalog";
import Achievements from "@/components/Achievements";
import Enrollcourses from "@/components/Enrollcourses"
export default function Home() {
  return (
     <div className="overflow-x-hidden">
      <Header />
      <Herosection />
      <SecctionOne />
      <CoursesCatalog />
      < Achievements />
      <Enrollcourses />
    </div>
  );
}
