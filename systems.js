// The systems are defined within this function so that they can access the p5.js functionality
function getSystems() {
  return [

  // Pythagoras tree
  {
    name: "Pythagoras tree",
    axiom: "0",
    rules: [
      {
        input: "0",
        output: "1[0]0"
      },
      {
        input: "1",
        output: "11"
      }
    ],
    startX: width / 2,
    startY: height,
    startAngle: 0,
    lineLength: 10,
    rotation: 90,
    instructions: [
      {
        char: "0",
        action: function() {
          line(0, 0, 0, -system.lineLength);
          translate(0, -system.lineLength);
        }
      },
      {
        char: "1",
        action: function() {
          line(0, 0, 0, -system.lineLength);
          translate(0, -system.lineLength);
        }
      },
      {
        char: "[",
        action: function() {
          push();
          rotate(-radians(system.rotation));
        }
      },
      {
        char: "]",
        action: function() {
          pop();
          rotate(radians(system.rotation));
        }
      }
    ]
  },

  // Fractal Plant
  {
    name: "Fractal Plant",
    axiom: "F",
    rules: [
      {
        input:  "F",
        output: "FF+[+F-F-F]-[-F+F+F]"
      }
    ],
    startX: width / 2,
    startY: height,
    startAngle: 0,
    lineLength: 10,
    rotation: -15,
    instructions: [
      {
        char: "F",
        action: function() {
          line(0, 0, 0, -system.lineLength);
          translate(0, -system.lineLength);
        }
      },
      {
        char: "G",
        action: function() {
          line(0, 0, 0, -system.lineLength);
          translate(0, -system.lineLength);
        }
      },
      {
        char: "+",
        action: function() {
          rotate(-radians(system.rotation));
        }
      },
      {
        char: "-",
        action: function() {
          rotate(radians(system.rotation));
        }
      },
      {
        char: "[",
        action: function() {
          push();
        }
      },
      {
        char: "]",
        action: function() {
          pop();
        }
      }
    ]
  },

  // Sierpinski triangle
  {
    name: "Sierpinski triangle",
    axiom: "F-G-G",
    rules: [
      {
        input:  "F",
        output: "F-G+F+G-F"
      },
      {
        input:  "G",
        output: "GG"
      }
    ],
    startX: 0,
    startY: height,
    startAngle: 30,
    lineLength: 10,
    rotation: 120,
    instructions: [
      {
        char: "F",
        action: function() {
          line(0, 0, 0, -system.lineLength);
          translate(0, -system.lineLength);
        }
      },
      {
        char: "G",
        action: function() {
          line(0, 0, 0, -system.lineLength);
          translate(0, -system.lineLength);
        }
      },
      {
        char: "+",
        action: function() {
          rotate(-radians(system.rotation));
        }
      },
      {
        char: "-",
        action: function() {
          rotate(radians(system.rotation));
        }
      }
    ]
  },

  // Dragon curve
  {
    name: "Dragon curve",
    axiom: "FX",
    rules: [
      {
        input:  "X",
        output: "X+YGF+"
      },
      {
        input:  "Y",
        output: "-FX-Y"
      }
    ],
    startX: width / 2,
    startY: height / 2,
    startAngle: 0,
    lineLength: 5,
    rotation: 90,
    instructions: [
      {
        char: "F",
        action: function() {
          line(0, 0, 0, -system.lineLength);
          translate(0, -system.lineLength);
        }
      },
      {
        char: "+",
        action: function() {
          rotate(radians(system.rotation));
        }
      },
      {
        char: "-",
        action: function() {
          rotate(radians(-system.rotation));
        }
      },
      {
        char: "G",
        action: function() {
          stroke(random(255), 0, 0);
        }
      }
    ]
  }

  ]
}
