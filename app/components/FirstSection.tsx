import PicturesBg from "./PicturesBg";
import LinkGoogleForm from "./LinkGoogleForm";
import WordRotate from "@/components/ui/word-rotate";

export default function FirstSection() {
  return (
    <section className="relative w-full z-10 pt-48 pb-20">
      <div className="relative">
        <PicturesBg />
        <div className="relative z-10">
          <div className="w-full max-w-[84rem] mx-auto px-8">
            <div className="relative">
              <div className="absolute bg-custom-gradient inset-0 z-10"></div>
              <div className="flex justify-center items-center relative z-20">
                <div className="text-center max-w-[50rem]">
                  <div className="flex justify-center mb-5 animate-bounceCustom">
                    <img
                      src="./Cursor.png"
                      alt=""
                      className="w-h-14 h-14 rotate-12"
                    />
                    <p className="flex items-center text-black text-sm md:text-lg bg-turquoise h-1/2 mt-auto font-semibold rounded-md px-2 py-1">
                      +150 000 pongistes nous font confiances
                    </p>
                  </div>
                  <h1 className="text-2xl md:text-[44px] md:leading-[56px] font-semibold mx-auto">
                    La meilleure app pongiste du marché, qui t’analyse enfin
                    correctement, et t’aide à réaliser{" "}
                    <WordRotate
                      className="text-2xl md:text-[44px] font-bold text-black dark:text-white"
                      words={["tes perfs rêvés.", "tes meilleurs scores."]}
                    />
                  </h1>
                  <LinkGoogleForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
