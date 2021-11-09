<template>
  <!-- <div id="ocean" ref="ocean"> -->
  <vue-p5 @sketch="sketch" id="ocean" ref="ocean"></vue-p5>
  <!-- </div> -->
</template>
<script>
import VueP5 from "vue-p5";

export default {
  name: "EasterEgg",
  components: {
    VueP5,
  },
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight - 64,
      // width: this.$refs.ocean.clientWidth,
      // height: this.$refs.ocean.clientHeight,
    };
  },
  methods: {
    sketch(sk) {
      let waterBlue;
      let fishColor;

      let fishes = [];
      let bubbles = [];

      // A class for fishes!
      class Fish {
        constructor(x, y) {
          // this.speed = 2;
          this.dir = 1;
          // this.w = sk.int(sk.random(1,50)) + 50;
          // this.h = sk.int(sk.random(1,20)) + 20;
          this.w = 50 * sk.random(0.1, 3);
          this.h = 20 * sk.random(0.1, 2);
          this.x = x;
          this.baseY = y;
          this.speed = sk.int(sk.random(1, 10));
          this.fishColour = sk.color(sk.random(255), sk.random(255), 0);
          this.tailColour = sk.color(
            sk.random(255),
            sk.random(255),
            sk.random(255)
          );
        }

        // Updates the movement of the fish - Class method
        move() {
          // Figure out the new x, y position of the fish.
          this.x += this.dir * this.speed;
          // If fish hits the edge of the screen, change direction
          if (this.x < 0 || this.x > sk.width) {
            this.dir = -this.dir;
            this.x += this.dir * this.speed;
          }
          // Fish will just sort of bob up and down as it moves.
          this.y = this.baseY + sk.sin(sk.radians(sk.frameCount * 2)) * 40;

          // Adjust the height positive or negative depending on the direction
          this.w = 50 * this.dir;
        }

        // Draw the fish to the screen.
        display() {
          // body
          sk.fill(this.fishColour);
          sk.ellipse(this.x, this.y, this.w * 2, this.h * 2);

          // eye
          sk.fill(255);
          sk.ellipse(this.x + 25 * this.dir, this.y, 10, 10);

          // pupil
          sk.fill(0);
          sk.ellipse(this.x + 27.5 * this.dir, this.y, 7.5, 7.5);

          // tail
          sk.fill(this.tailColour);
          sk.triangle(
            this.x - 50 * this.dir,
            this.y,
            this.x - 70 * this.dir,
            this.y + 20,
            this.x - 70 * this.dir,
            this.y - 20
          );
        }
      }

      class Bubble {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.baseX = x;
          this.speed = -1 * sk.random(0, 5);
          this.outerCol = sk.color(255, 255, 255, 50);
          this.innerCol = sk.color(255, 255, 255, 180);
          this.size = 50;
        }

        move() {
          this.y += this.speed;
          if (this.y < -0.2 * sk.height) {
            this.y = sk.height * 1.2;
          }
          // this.x = this.baseX + sk.sin(sk.radians(sk.frameCount * 2)) * 30;
        }

        display() {
          sk.fill(this.outerCol);
          sk.ellipse(this.x, this.y, this.size);
          sk.fill(this.innerCol);
          sk.ellipse(
            this.x + 0.2 * this.size,
            this.y - 0.2 * this.size,
            0.2 * this.size
          );
        }
      }
      //Fish fishy = new Fish(50, 50);
      //Fish fishyFriend = new Fish(100, 100);

      sk.setup = () => {
        sk.createCanvas(this.width, this.height);
        waterBlue = sk.color(16, 59, 114);
        fishColor = sk.color("#FFE517");

        sk.background(waterBlue);
        sk.fill(fishColor);
        sk.smooth();
        sk.noStroke();

        for (let i = 0; i < 7; i ++) {
          let newBub = new Bubble(sk.random(0,sk.width), sk.random(0,sk.height));
          bubbles.push(newBub)
        }
      };

      sk.draw = () => {
        sk.background(waterBlue);
        for (let i = 0; i < bubbles.length; i++) {
          bubbles[i].move();
          bubbles[i].display();
        }
        for (let i = 0; i < fishes.length; i++) {
          fishes[i].move();
          fishes[i].display();
        }
      };

      sk.mousePressed = () => {
        let newFish = new Fish(sk.mouseX, sk.mouseY);
        // let newFish = new Fish(sk.random(0,sk.width), sk.random(0,sk.height));
        fishes.push(newFish);
      };

      // sk.mousePressed = () => {

      // }
    },
    render(h) {
      return h(VueP5, { on: this });
    },
  },
};
</script>
<style scoped lang="scss">
#ocean {
  width: 100%;
  height: calc(100vh - 64px);
  overflow: hidden;
  background-color: rgb(16, 59, 114);
  // padding: 20px;
  // animation: wave 3s infinite alternate;

  canvas {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>