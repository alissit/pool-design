import MobileMenu from "./modules/MobileMenu";
import Gallery from "./modules/Gallery";
import $ from "jquery";
import RevealOnScroll from "./modules/RevealOnScroll";
import Lightbox2 from "../../../node_modules/lightbox2/dist/js/lightbox";



var mobileMenu = new MobileMenu();
new RevealOnScroll($(".icons"), "60%");
new RevealOnScroll($(".foot-slidera"), "85%");