// L-System Generator
// Jack Purvis

// System variables
var system;
var sentence;

// Elements
var textContainer, canvas, systemDropdown;

// Buttons
var showTextButton, showCanvasButton, generateButton, resetButton;

function setup() {
  setupDOM();
  setupSystem();
}

function setupSystem() {
  system = getSystems()[systemDropdown.value()];

  // Grammar setup
  sentence = system.axiom;

  // Initial output
  createP(system.axiom).parent(textContainer);
  drawSentence();
}

function generate() {
  var nextSentence = "";

  // For each character
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);

    var matchedRule = false;

    // For each rule
    for (var r = 0; r < system.rules.length; r++) {
      var rule = system.rules[r];

      // Matched
      if (current == rule.input) {
        nextSentence += rule.output;
        matchedRule = true;
        break;
      }
    }

    // Unmatched
    if (!matchedRule) {
      nextSentence += current;
    }
  }

  sentence = nextSentence;
  createP(sentence).parent(textContainer);
  drawSentence();
}

function drawSentence() {
  background(200);

  fill(0);
  stroke(0);
  strokeWeight(2);

  // Apply base system transformations
  translate(system.startX, system.startY);
  rotate(radians(system.startAngle));

  // For each character
  for (var c = 0; c < sentence.length; c++) {
    var current = sentence.charAt(c);

    // For each instruction
    for (var i = 0; i < system.instructions.length; i++) {
      var instruction = system.instructions[i];

      if (current == instruction.char) {
        instruction.action(system);
        break;
      }
    }
  }
}

function setupDOM() {
  textContainer = createDiv("");
  textContainer.position(10, 50);

  showTextButton = createButton('Show Text');
  showTextButton.position(10, 10);
  showTextButton.mousePressed(showText);
  showTextButton.hide();

  showCanvasButton = createButton('Show Canvas');
  showCanvasButton.position(90, 10);
  showCanvasButton.mousePressed(showCanvas);

  generateButton = createButton("Generate");
  generateButton.position(190, 10);
  generateButton.mousePressed(generate);

  resetButton = createButton("Reset");
  resetButton.position(270, 10);
  resetButton.mousePressed(reset);

  canvas = createCanvas(600, 600);
  canvas.position(10, 50);
  canvas.hide();

  systems = getSystems();
  systemDropdown = createSelect();
  systemDropdown.position(360, 10);
  for (var s = 0; s < systems.length; s++) {
    systemDropdown.option(systems[s].name, s);
  }
  systemDropdown.changed(changeSystem);
}

function showText() {
  showTextButton.hide();
  canvas.hide();
  textContainer.show();
  showCanvasButton.show();
}

function showCanvas() {
  showCanvasButton.hide();
  textContainer.hide();
  canvas.show();
  showTextButton.show();
}

function changeSystem() {
  setupSystem();
  reset();
}

function reset() {
  textContainer.remove();
  textContainer = createDiv("");
  textContainer.position(10, 50);
  showText();

  sentence = system.axiom;
  createP(system.axiom).parent(textContainer);
  drawSentence();
}
