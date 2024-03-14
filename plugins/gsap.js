import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollToPlugin } from "gsap-trial/ScrollToPlugin";
import { TextPlugin } from "gsap-trial/TextPlugin";

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(TextPlugin, ScrollToPlugin, ScrollTrigger);

  return { provide: { gsap, ScrollToPlugin, ScrollTrigger, TextPlugin } };
});
