// TO DO
// REVEAL ON scroll
// GSAP ANIMATION
// const main = document.getElementById("#main");
// var main = document.getElementsById("#main");

// var cursor = document.getElementById("#cursor"),
// //   mouseX = 0,
// //   mouseY = 0;

// // gsap.to({ cursor }, 0.016, {
// //   repeat: -1,

// //   onRepeat: function() {
// //     gsap.set(cursor, {
// //       css: {
// //         left: mouseX,
// //         top: mouseY
// //       }
// //     });
// //   }
// // });

// window.addEventListener("mousemove", function(dets) {
//     console.log("radhe radhe");
// //   gsap.to(cursor, {
// //     mouseX: dets.clientX,
// //     mouseY: dets.clientY
// //   });
// });

// window.addEventListener("mousemove", function(dets) {
//   gsap.to(cursor, {
//     x: dets.x,
//     y: dets.y,
//     repeat: -1
//   });
// });

// var tl = gsap.timeline();

// gsap.from("nav a", {
//   scale: 0.2,
//   duration: 1,
//   y: -23,
//   x: 0,
//   delay: 0.2
// });

// gsap.from(".hero-logo", {
//   // scale:.2,
//   duration: 1.5,
//   // y:23,
//   y: -70,
//   delay: 0.2
// });

// gsap.from(".hero-img", {
//     opacity:0,
//     scale:1.3,
//     duration: 1.3,
// });


var tl = gsap.timeline();

tl.from("nav a", {
  scale: 0.2,
  duration: 0.8,
  y: -23,
  x: 0,
  delay: 0.2
});

gsap.from(".hero-logo", {
  // scale:.2,
  duration: 0.9,
  // y:23,
  y: -70,
  delay: 0.2
});

tl.from(".hero-img", {
  opacity: 0,
  scale: 1.4,
  duration: 1
});

tl.from(".hero-section h3", {
  opacity: 0,
  // scale:1.2,
  duration: 1
});

gsap.from(".notes .heading", {
  duration: 1,
  x: -170,
  delay: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".notes",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 100%",
    scrub: 2
  }
});

var tl2 = gsap.timeline();

// container 1
gsap.from(".notes .container1", {
  duration: 1,
  x: 50,
  delay: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".container1",
    scroller: "body",
    // markers: true,
    start: "top 65%",
    end: "top 100%"
    // scrub: 2,
  }
});

//  box in container 1

    //   markers: true,
// tl2.from(".notes .container1 .notes-container .box", {
//   duration: 1,
//   y: 50,
//   delay: 0.2,
//   opacity: 0,
//   // stagger:.5,
//   scrollTrigger: {
//     trigger: ".container1 .notes-container .box",
//     scroller: "body",
//     //   markers: true,
//     start: "top 65%",
//     end: "top 100%"
//     // scrub: 2,
//   }
// });

// container 2
gsap.from(".notes .container2", {
  duration: 1,
  x: -50,
  delay: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".container2",
    scroller: "body",
    // markers: true,
    start: "top 63%",
    end: "top 100%"
    // scrub: 2,
  }
});

// box in container 2

// tl2.from(".notes .container2 .notes-container .box", {
//   duration: 1,
//   y: 50,
//   delay: 0.2,
//   opacity: 0,
//   // stagger:.5,
//   scrollTrigger: {
//     trigger: ".container2 .notes-container .box",
//     scroller: "body",
//     //   markers: true,
//     start: "top 65%",
//     end: "top 100%"
//     // scrub: 2,
//   }
// });

// // container 3
gsap.from(".notes .container3", {
  duration: 1,
  x: 50,
  delay: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".container3",
    scroller: "body",
    // markers: true,
    start: "top 63%",
    end: "top 100%"
    // scrub: 2,
  }
});

// box in container 3

// tl2.from(".notes .container3 .notes-container .box", {
//   duration: 1,
//   y: 50,
//   delay: 0.2,
//   opacity: 0,
//   // stagger:.5,
//   scrollTrigger: {
//     trigger: ".container3 .notes-container .box",
//     scroller: "body",
//     //   markers: true,
//     start: "top 65%",
//     end: "top 100%"
//     // scrub: 2,
//   }
// });

// container 4
gsap.from(".notes .container4", {
  duration: 1,
  x: -50,
  delay: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".container4",
    scroller: "body",
    // markers: true,
    start: "top 65%",
    end: "top 100%"
    // scrub: 2,
  }
});

// box in container 4

// tl2.from(".notes .container4 .notes-container .box", {
//   duration: 1,
//   y: 50,
//   delay: 0.2,
//   opacity: 0,
//   // stagger:.5,
//   scrollTrigger: {
//     trigger: ".container4 .notes-container .box",
//     scroller: "body",
//     //   markers: true,
//     start: "top 65%",
//     end: "top 100%"
//     // scrub: 2,
//   }
// });

// // container 5
gsap.from(".notes .container5", {
  duration: 1,
  x: 50,
  delay: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".container5",
    scroller: "body",
    // markers: true,
    start: "top 65%",
    end: "top 100%"
  }
});

// box in container 5

// tl2.from(".notes .container5 .notes-container .box", {
//   duration: 1,
//   y: 50,
//   delay: 0.2,
//   opacity: 0,
//   // stagger:.5,
//   scrollTrigger: {
//     trigger: ".container5 .notes-container .box",
//     scroller: "body",
//     //   markers: true,
//     start: "top 65%",
//     end: "top 100%"
//     // scrub: 2,
//   }
// });

//------------------  shivani section --------------------------

gsap.from(".shivani-pdf .heading", {
  duration: 1,
  x: -50,
  delay: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".shivani-pdf .heading",
    scroller: "body",
    //   markers: true,
    start: "top 80%",
    end: "top 100%"
    //   scrub: 2,
  }
});

// shivani books box

gsap.from(".shivani-pdf .shivani-cont .book", {
  duration: 1,
  y: 40,
  delay: 0.4,
  opacity: 0,
//   stagger: .1,
  scrollTrigger: {
    trigger: ".shivani-pdf .shivani-cont ",
    scroller: "body",
    //   markers: true,
    start: "top 70%",
    end: "top 120%"
    //   scrub: 2,
  }
});

//   transform: perspective(800px) rotateY(-10deg) translateY(-20px) rotateX(10deg)
//   scale(1);
// filter: blur(0);
// opacity: 1;
// transition: all .4s ease-in-out;
// transition-delay: .1s;

//   document.querySelector('.shivani-cont .book').addEventListener('mouseenter', () => {
//     gsap.to('.shivani-pdf .shivani-cont .book', {
//          scale: 1.1,
//          y:10
//         });
//   });

gsap.from(".footer .thank-box", {
  duration: 1,
  y: 40,
  delay: 0.4,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: ".footer .thank-box",
    scroller: "body",
    //   markers: true,
    start: "top 80%",
    end: "top 100%",
    scrub: 2
  }
});

// footer logo
gsap.from(".footer img", {
  duration: 1,
  y: 40,
  delay: 0.4,
  opacity: 0,
  scrollTrigger: {
    trigger: ".footer img",
    scroller: "body",
    //   markers: true,
    start: "top 95%",
    end: "top 100%",
    scrub: 2
  }
});
gsap.from(".footer h3", {
  duration: 1,
  y: 1,
  delay: 0.4,
  opacity: 0,
  stagger: 2,
  scrollTrigger: {
    trigger: ".footer h3",
    scroller: "body",
    //   markers: true,
    start: "top 99%",
    end: "top 100%"
    //   scrub: 2,
  }
});
