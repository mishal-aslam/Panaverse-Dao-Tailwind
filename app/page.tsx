import  Header from "./components/Header";
import HomeHero  from "./components/HomeHero";
import CoreTracks from "./components/CoreTracks";
import SpecializedTracks from "./components/SpecializedTracks";
import Courses from "./components/Courses"

export default function Home() {
  return (
    <>
       <Header />
       <HomeHero />
       <CoreTracks />
       <SpecializedTracks />
       <Courses />
    
    </>
  );
}
