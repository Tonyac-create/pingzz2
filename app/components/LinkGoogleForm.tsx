import { ConfettiButton } from "@/components/ui/confetti";
import React from "react";

export default function LinkGoogleForm() {
  return (
    <>
      <div className="flex items-center relative mt-6 ml-auto">
        <div className="absolute bottom-[-82px] right-5 md:right-64 rotate-90 md:rotate-0">
          <img
            src="./orangeArrow.png"
            alt=""
            className="animate-bounceReverse"
          />
        </div>
        <div className="bg-orange animate-bounceReverse p-2 rounded-xl font-semibold border-2 border-white -rotate-6 absolute right-[3.75rem] bottom-[-106px] md:right-[9.6rem] md:bottom-[-100px]">
          Obtiens -20%
        </div>
      </div>
      <div>
        <ConfettiButton
          className="text-xl font-semibold rounded-xl"
          size={"lg"}
        >
          <a href="https://app.youform.com/forms/necvp16w" target="_blank">
            Rejoindre la waitlist
          </a>
        </ConfettiButton>
      </div>
    </>
  );
}
