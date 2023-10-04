var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var color1 = randomNumber (1,255);
var color2 = randomNumber (1,255);
var color3 = randomNumber (1,255);
var size1 = randomNumber (5,45);
var size2 = randomNumber (10,60);
var y = randomNumber (200,240);
var y1 = randomNumber (60,120);

background(rgb(color1, color2, color3));
color1 = randomNumber (1,255);
color2 = randomNumber (1,255);
color3 = randomNumber (1,255);


fill("blue");
regularPolygon(200, 200, 8, 150);

fill("yellow");
regularPolygon(30, 200, 6, size1);
regularPolygon(370, 200, 6, size1);

fill("pink");
ellipse(140, 140, size2, size2);
ellipse(250, 140, size2, size2);

fill("gray");
rect(100, y, 200, 50);
fill("black");
rect(110, y, 180, 40);

fill("gray");
rect(120, y1, 60, 20);

var y1 = randomNumber (80,100);
fill("gray");
rect(220, y1, 60, 20);

fill("red");
regularPolygon(170, 45, 3, 40);
regularPolygon(230, 45, 3, 40);






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
