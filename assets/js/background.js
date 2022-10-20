var slider01 = "https://i.ibb.co/5xFY6v3/Slider03.jpg"; 
var slider02 = "https://i.ibb.co/Z6JL1bG/Slider02.jpg";
var slider03 = "https://i.ibb.co/NjWK50M/Slider01.jpg";


const images = [slider01];
const texts = [];

rgbKineticSlider = new rgbKineticSlider({
    slideImages: images,
    itemsTitles: texts,

    backgroundDisplacementSprite:
        "http://hmongouachon.com/_demos/rgbKineticSlider/map-9.jpg",
    cursorDisplacementSprite:
        "http://hmongouachon.com/_demos/rgbKineticSlider/displace-circle.png",
    cursorScaleIntensity: 0.6,
    cursorMomentum: 0.14,

    swipe: false,
    swipeDistance: window.innerWidth * 0.4,
    swipeScaleIntensity: 2,

    slideTransitionDuration: 0.8,
    transitionScaleIntensity: 30,
    transitionScaleAmplitude: 160,

    nav: true,
    navElement: ".main-nav",

    imagesRgbEffect: false,
    imagesRgbIntensity: 4,
    navImagesRgbIntensity: 120,

    textsDisplay: true,
    textTitleSize: 144,
    textsTiltEffect: true,
    googleFonts: ["Playfair Display:400"],
    textsRgbEffect: true,
    textsRgbIntensity: 1,
});