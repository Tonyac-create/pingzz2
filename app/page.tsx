// import { generateImagePath, shuffleArray } from "./scripts/generateImagePath";
// import Gallery from "./components/TestGallery";

import FirstSection from "./components/FirstSection";
import FiveSection from "./components/FiveSection";
import FourSection from "./components/FourSection";
import NavBar from "./components/NavBar";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

export default async function Home() {
  // const imagePaths = await generateImagePath();
  // const secondArray = shuffleArray(imagePaths);
  return (
    //
    <>
      <NavBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FiveSection />
    </>
  );
}
