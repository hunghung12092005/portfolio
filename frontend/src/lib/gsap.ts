import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, SplitText, Observer, CustomEase);
gsap.defaults({
  duration: 0.7,
  ease: "power3.out",
});

export { CustomEase, Observer, ScrollToPlugin, ScrollTrigger, SplitText, gsap, useGSAP };
