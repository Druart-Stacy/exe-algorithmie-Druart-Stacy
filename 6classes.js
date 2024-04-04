class Circle {
  constructor(xPos, yPos, radius) {
      this.xPos = xPos;
      this.yPos = yPos;
      this.radius = radius;
  }

  // Method to adjust the position of the circle
  move(xOffset, yOffset) {
      this.xPos += xOffset;
      this.yPos += yOffset;
  }

  // Getter accessor to calculate and return the surface area of the circle
  get surface() {
      return Math.PI * Math.pow(this.radius, 2);
  }
}

// Test the Circle class
let myCircle = new Circle(0, 0, 5); // Creating a circle with center at (0, 0) and radius 5
document.write("<p>Initial Circle:</p>");
document.write("<p>xPos: " + myCircle.xPos + "</p>"); // Output the initial xPos
document.write("<p>yPos: " + myCircle.yPos + "</p>"); // Output the initial yPos
document.write("<p>Radius: " + myCircle.radius + "</p>"); // Output the initial radius
document.write("<p>Surface Area: " + myCircle.surface + "</p>"); // Output the initial surface area

// Move the circle
myCircle.move(3, 4); // Move the circle by xOffset of 3 and yOffset of 4
document.write("<p>Circle after moving:</p>");
document.write("<p>xPos: " + myCircle.xPos + "</p>"); // Output the updated xPos
document.write("<p>yPos: " + myCircle.yPos + "</p>"); // Output the updated yPos

// Change the radius
myCircle.radius = 8; // Change the radius to 8
document.write("<p>Circle after changing the radius:</p>");
document.write("<p>Radius: " + myCircle.radius + "</p>"); // Output the updated radius
document.write("<p>Surface Area: " + myCircle.surface + "</p>"); // Output the updated surface area
