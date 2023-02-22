import { MDCRipple } from "@material/ripple/index";

const ripple = new MDCRipple(document.querySelector(".foo-button"));

const selector = ".mdc-button, .mdc-icon-button, .mdc-card__primary-action";
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
    return new MDCRipple(el);
});
