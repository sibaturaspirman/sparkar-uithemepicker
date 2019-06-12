// = UI Theme Picker ================
// 

// Load in the required modules
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Animation = require('Animation');
const Diagnostics = require('Diagnostics');
const CameraInfo = require('CameraInfo');
const Materials = require('Materials');

// Locate the object in the Scene
const arrowC = Scene.root.find('arrowC');
const arrow = Scene.root.find('arrow');
const theme = Scene.root.find('theme');
const theme1 = Scene.root.find('theme1');
const theme2 = Scene.root.find('theme2');
const topObject = Scene.root.find('topObject');

const footer1 = Scene.root.find('footer1');
const footer2 = Scene.root.find('footer2');

const material = Materials.get('top1');
const material2 = Materials.get('top2');

theme.transform.x = 170.375;
arrow.transform.x = 1.375;
footer2.transform.y = -265;

// -- WHEN CAPTURE
const isCapturingPhoto = CameraInfo.isCapturingPhoto;
const isRecordingVideo = CameraInfo.isRecordingVideo;
const hidearrowC = isCapturingPhoto.or(isRecordingVideo);
arrowC.hidden = hidearrowC;

// -- ARROW CLICK ANIMATION
TouchGestures.onTap(arrowC).subscribe(function (gesture) {
  themeShow();
});


// -- THEME CLICK ANIMATION
TouchGestures.onTap(theme1).subscribe(function (gesture) {
  themeHide();
  theme1Show();

  topObject.material = material;

  Diagnostics.log("Theme 1");
});
TouchGestures.onTap(theme2).subscribe(function (gesture) {
  themeHide();
  theme1Hide()

  topObject.material = material2;

  Diagnostics.log("Theme 2");
});


// -- FUNCTION ANIMATION
const animationDurationParameters = {
  durationMilliseconds: 800,
  loopCount: 1,
  mirror: false
};

function themeShow(){
  const animationDuration = Animation.timeDriver(animationDurationParameters);
  const animationEffectThemeC = Animation.samplers.easeInOutQuad(170.375, 0);
  const animationTranslationThemeC = Animation.animate(animationDuration, animationEffectThemeC);
  const animationEffectArrowC = Animation.samplers.easeInOutQuad(1.375, 170.375);
  const animationTranslationArrowC = Animation.animate(animationDuration, animationEffectArrowC);
  theme.transform.x = animationTranslationThemeC;
  arrow.transform.x = animationTranslationArrowC;
  animationDuration.start();
}

function themeHide(){
  const animationDuration = Animation.timeDriver(animationDurationParameters);
  const animationEffectThemeC = Animation.samplers.easeInOutQuad(0, 170.375);
  const animationTranslationThemeC = Animation.animate(animationDuration, animationEffectThemeC);
  const animationEffectArrowC = Animation.samplers.easeInOutQuad(170.375, 1.375);
  const animationTranslationArrowC = Animation.animate(animationDuration, animationEffectArrowC);
  theme.transform.x = animationTranslationThemeC;
  arrow.transform.x = animationTranslationArrowC;
  animationDuration.start();
}

function theme1Show(){
  const animationDuration = Animation.timeDriver(animationDurationParameters);
  const animationEffectFooter1 = Animation.samplers.easeInOutQuad(-265, 0);
  const animationTranslationFooter1 = Animation.animate(animationDuration, animationEffectFooter1);
  const animationEffectFooter2 = Animation.samplers.easeInOutQuad(0, -265);
  const animationTranslationFooter2 = Animation.animate(animationDuration, animationEffectFooter2);
  footer1.transform.y = animationTranslationFooter1;
  footer2.transform.y = animationTranslationFooter2;
  animationDuration.start();
}
function theme1Hide(){
  const animationDuration = Animation.timeDriver(animationDurationParameters);
  const animationEffectFooter1 = Animation.samplers.easeInOutQuad(0, -265);
  const animationTranslationFooter1 = Animation.animate(animationDuration, animationEffectFooter1);
  const animationEffectFooter2 = Animation.samplers.easeInOutQuad(-265, 0);
  const animationTranslationFooter2 = Animation.animate(animationDuration, animationEffectFooter2);
  footer1.transform.y = animationTranslationFooter1;
  footer2.transform.y = animationTranslationFooter2;
  animationDuration.start();
}
