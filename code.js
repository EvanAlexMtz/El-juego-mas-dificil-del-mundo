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

var muertes = 0;
var pared1 = createSprite(190, 120, 250, 3);
var pared2 = createSprite(190, 260, 250, 3);
var pared3 = createSprite(67, 145, 3, 50);
var pared4 = createSprite(67, 235, 3, 50);
var pared5 = createSprite(313, 145, 3, 50);
var pared6 = createSprite(313, 235, 3, 50);
var pared7 = createSprite(41, 170, 50, 3);
var pared8 = createSprite(41, 210, 50, 3);
var pared9 = createSprite(337, 210, 50, 3);
var pared10 = createSprite(337, 170, 50, 3);
var pared11 = createSprite(18, 190, 3, 40);
var pared12 = createSprite(361, 190, 3, 40);
var player = createSprite(40, 190, 13, 13);
player.shapeColor = "red";
var obstaculo1 = createSprite(100, 130, 10, 10);
obstaculo1.shapeColor = "green";
var obstaculo2 = createSprite(215, 130, 10, 10);
obstaculo2.shapeColor = "green";
var obstaculo3 = createSprite(165, 250, 10, 10);
obstaculo3.shapeColor = "green";
var obstaculo4 = createSprite(270, 250, 10, 10);
obstaculo4.shapeColor = "green";
obstaculo1.velocityY = 7;
obstaculo2.velocityY = 7;
obstaculo3.velocityY = -7;
obstaculo4.velocityY = -7;
playSound("assets/category_music/clear_evidence_loop1.mp3");
function draw() {
  background("white");
  text("Muertes:" + muertes, 275, 84);
  fill("skyblue");
  rect(18, 170, 49, 40);
  rect(311, 170, 49, 40);
  drawSprites();
  obstaculo1.bounceOff(pared1);
  obstaculo1.bounceOff(pared2);
  obstaculo2.bounceOff(pared1);
  obstaculo2.bounceOff(pared2);
  obstaculo3.bounceOff(pared1);
  obstaculo3.bounceOff(pared2);
  obstaculo4.bounceOff(pared1);
  if (keyDown("right")) {
    player.x = player.x + 2;
  }
  if (keyDown("left")) {
    player.x = player.x - 2;
  }
  if (((((player.isTouching(obstaculo1) || player.isTouching(obstaculo2)) || player.isTouching(obstaculo3)) || player.isTouching(obstaculo4)) || player.isTouching(pared11)) || player.isTouching(pared12)) {
    muertes = muertes + 1;
    player.x = 40;
    player.y = 190;
  }
  obstaculo4.bounceOff(pared2);
}

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
