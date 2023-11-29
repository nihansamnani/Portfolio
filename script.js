gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

const t1 = gsap.timeline();

function navAni() {
  t1.from(".heroup", {
    y: -50,
    opacity: 0,
    // duration: 2
  });
}
function page1Ani() {
  document.querySelector(".mainhead1").style.overflow = "hidden";
  document.querySelector(".mainhead2").style.overflow = "hidden";
  t1.from(".mainhead1 p", {
    y: -200,
    // duration: 5
  });
  t1.from(".mainhead2 p", {
    y: 200,
    // duration: 5
  });
  document
    .querySelector("#linkedin_link")
    .addEventListener("mousemove", function () {
      gsap.to("#linkedin_link svg", {
        rotate: 45,
      });
    });
  document
    .querySelector("#linkedin_link")
    .addEventListener("mouseleave", function () {
      gsap.to("#linkedin_link svg", {
        rotate: 0,
      });
    });
  document
    .querySelector("#github_link")
    .addEventListener("mousemove", function () {
      gsap.to("#github_link svg", {
        rotate: 45,
      });
    });
  document
    .querySelector("#github_link")
    .addEventListener("mouseleave", function () {
      gsap.to("#github_link svg", {
        rotate: 0,
      });
    });
  document
    .querySelector("#instagram_link")
    .addEventListener("mousemove", function () {
      gsap.to("#instagram_link svg", {
        rotate: 45,
      });
    });
  document
    .querySelector("#instagram_link")
    .addEventListener("mouseleave", function () {
      gsap.to("#instagram_link svg", {
        rotate: 0,
      });
    });
}
function page3Ani() {
  if (x.matches) {
    gsap.from(".project1", {
      x: -200,
      duration: 1,
      scrollTrigger: {
        trigger: ".project1",
        scroller: ".main",
        start: "top 60%",
        end: "top 30%",
        markers: true,
        // scrub: 3,
      },
    });
    gsap.from(".project2", {
      x: 200,
      duration: 1,
      scrollTrigger: {
        trigger: ".project2",
        scroller: ".main",
        start: "top 60%",
        end: "top 30%",
        markers: true,
        // scrub: 3,
      },
    });
  }
}
function circleFollow() {
  if (x.matches) {
    document.addEventListener("mousemove", function (dets) {
      gsap.to(".circle", {
        scale: 1,
        x: dets.x,
        y: dets.y,
        delay: 0,
      });
    });
  }
}
function heroAni() {
  if (x.matches) {
    t1.from(".page1", {
      y: 300,
      duration: 1,
    });
  } else {
    t1.from(".page1", {
      opacity: 0,
      y: 100,
      duration: 1,
    });
  }
}
function proAni() {
  if (x.matches) {
    document
      .querySelector(".project1")
      .addEventListener("mousemove", function () {
        document.querySelector(".circle").innerHTML = `<a href="#">View</a>`;
        gsap.to(".circle", {
          color: "white",
          backgroundColor: "black",
          height: "5rem",
          width: "5rem",
        });
      });
    document
      .querySelector(".project1")
      .addEventListener("mouseleave", function () {
        document.querySelector(".circle").textContent = "";
        gsap.to(".circle", {
          color: "transparent",
          backgroundColor: "white",
          height: "1rem",
          width: "1rem",
        });
      });

    document
      .querySelector(".project2")
      .addEventListener("mousemove", function () {
        document.querySelector(".circle").innerHTML = `<a href="#">View</a>`;
        document.querySelector(".circle a").style.color = "black";
        gsap.to(".circle", {
          color: "black",
          backgroundColor: "white",
          height: "5rem",
          width: "5rem",
        });
      });
    document
      .querySelector(".project2")
      .addEventListener("mouseleave", function () {
        document.querySelector(".circle").textContent = "";
        gsap.to(".circle", {
          color: "transparent",
          backgroundColor: "white",
          height: "1rem",
          width: "1rem",
        });
      });
    document
      .querySelector(".project3")
      .addEventListener("mousemove", function () {
        document.querySelector(".circle").innerHTML = `<a href="#">View</a>`;
        gsap.to(".circle", {
          color: "white",
          backgroundColor: "black",
          height: "5rem",
          width: "5rem",
        });
      });
    document
      .querySelector(".project3")
      .addEventListener("mouseleave", function () {
        document.querySelector(".circle").textContent = "";
        gsap.to(".circle", {
          color: "transparent",
          backgroundColor: "white",
          height: "1rem",
          width: "1rem",
        });
      });
  }
}
function scanAni() {
  if (x.matches) {
    document
      .querySelector(".scannerhead svg")
      .addEventListener("mousemove", function () {
        gsap.to(".scannerhead svg", {
          scale: 1.2,
          duration: 0.5,
        });
      });
    document
      .querySelector(".scannerhead svg")
      .addEventListener("mouseleave", function () {
        gsap.to(".scannerhead svg", {
          scale: 1,
          duration: 0.5,
        });
      });
  } else {
    document
      .querySelector(".scannerhead2 svg")
      .addEventListener("mousemove", function () {
        gsap.to(".scannerhead2 svg", {
          scale: 1.2,
          duration: 0.5,
        });
      });
    document
      .querySelector(".scannerhead2 svg")
      .addEventListener("mouseleave", function () {
        gsap.to(".scannerhead2 svg", {
          scale: 1,
          duration: 0.5,
        });
      });
  }
}
function scroll() {
  if (x.matches) {
    gsap.to(".scroll", {
      x: -200,
      duration: 5,
      scrollTrigger: {
        trigger: ".scroll",
        scroller: ".main",
        start: "top 60%",
        end: "top 30%",
        scrub: 3,
      },
    });
  } else {
    gsap.to(".scroll", {
      x: -200,
      duration: 10,
      scrollTrigger: {
        trigger: ".scroll",
        scroller: ".main",
        start: "top 60%",
        end: "top 30%",
        scrub: 3,
      },
    });
  }
}

var x = window.matchMedia("(min-width: 600px)");

function todaysDate(){

    if (x.matches) {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
      
        const getOrdinalSuffix = (number) => {
          const suffixes = ["th", "st", "nd", "rd"];
          const v = number % 100;
          return v >= 11 && v <= 13 ? "th" : suffixes[(v - 1) % 10] || "th";
        };
      
        const today = new Date();
      
        const day = today.getDate();
        const monthIndex = today.getMonth();
        const year = today.getFullYear();
      
        const ordinalSuffix = getOrdinalSuffix(day);
      
        const formattedDate = `${day}${ordinalSuffix} ${months[monthIndex]} ${year}`;
      
        console.log(formattedDate);
        document.querySelector(".hu-2").textContent = formattedDate;
      } else {
      const currentDate = new Date();
      
      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.getMonth() + 1; 
      const currentYear = currentDate.getFullYear();
      
      const formattedCurrentDate = `${currentDay}-${currentMonth}-${currentYear}`;
      
      document.querySelector(".hu-2").textContent = formattedCurrentDate;
      
      }
}


navAni();
circleFollow();
page1Ani();
page3Ani();
proAni();
heroAni();
scroll();
scanAni();
todaysDate();
