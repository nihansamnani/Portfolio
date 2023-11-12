// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function loaderAni(){
    const t1 = gsap.timeline();
    t1.to(".loader", {
        delay:1,
        duration: 3,
        scale: 50
        // backgroundColor: "blue"
    })
    
    t1.to(".loading", {
        opacity: 0,
        duration: -3,
    })
    t1.to(".loading", {
        // duration: .8,
        display: "none"

    })
    t1.from(".main", {
        y: 600,
        display: "none",
        opacity: 0,
        duration: 1

    })
    
}

function circleFollow(){
    document.addEventListener("mousemove", function(dets){
        gsap.to(".circle", {
            scale: 1,
            x: dets.x,
            y: dets.y
        })
    })
}
function heroAni(){
    // const t1  = gsap.timeline();
    gsap.from(".heroup", {
        opacity: 0,
        y: -100,
        duration: 1,
    })
    gsap.from(".mainhead1 p", {
        delay: 1,
        x:800,
        duration: 1
    })
    gsap.from(".mainhead2 p", {
        delay: 1,
        x:-800,
        duration: 1
    })
}
loaderAni();
circleFollow();
// heroAni();