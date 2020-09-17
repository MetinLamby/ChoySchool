import Typed from 'typed.js';

const loadDynamicBannerText = () => {
    new Typed('#banner-typed-text', {
    strings: ["designen^1500", "programmieren^1500", "warten^1500"],
    typeSpeed: 70,
    loop: true
  });

}

export { loadDynamicBannerText };
