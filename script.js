gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

const t1 = gsap.timeline();

function loaderAni(){
    t1.to(".loader", {
        delay:.5,
        duration: 1,
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
function page1Ani(){
    document.querySelector("#linkedin_link").addEventListener("mousemove", function(){
        gsap.to("#linkedin_link svg", {
            rotate: 45
        })
    })
    document.querySelector("#linkedin_link").addEventListener("mouseleave", function(){
        gsap.to("#linkedin_link svg", {
            rotate: 0
        })
    })
    document.querySelector("#github_link").addEventListener("mousemove", function(){
        gsap.to("#github_link svg", {
            rotate: 45
        })
    })
    document.querySelector("#github_link").addEventListener("mouseleave", function(){
        gsap.to("#github_link svg", {
            rotate: 0
        })
    })
    document.querySelector("#instagram_link").addEventListener("mousemove", function(){
        gsap.to("#instagram_link svg", {
            rotate: 45
        })
    })
    document.querySelector("#instagram_link").addEventListener("mouseleave", function(){
        gsap.to("#instagram_link svg", {
            rotate: 0
        })
    })
}
function circleFollow(){
    if (x.matches){
        document.addEventListener("mousemove", function(dets){
            gsap.to(".circle", {
                scale: 1,
                x: dets.x,
                y: dets.y,
                delay: 0
            })
        })
    }
}
function heroAni(){
    if (x.matches){
        t1.from(".page1",{
            y:300,
            duration: 1
        })
    }
    else{
        t1.from(".page1",{
            opacity: 0,
            y:100,
            duration: 1
        })
    }
}
function proAni(){
    if (x.matches){
        document.querySelector(".project1").addEventListener("mousemove", function(){
            document.querySelector(".circle").innerHTML = `<a href="#">View</a>`
            gsap.to(".circle", {
                color: "white",
                backgroundColor: "black",
                height: "5rem",
                width: "5rem"
            })
           
        })
        document.querySelector(".project1").addEventListener("mouseleave", function(){
            document.querySelector(".circle").textContent = ""
            gsap.to(".circle", {
                color: "transparent",
                backgroundColor: "white",
                height: "1rem",
                width: "1rem"
            })
            
        })
        
        document.querySelector(".project2").addEventListener("mousemove", function(){
            document.querySelector(".circle").innerHTML = `<a href="#">View</a>`
            document.querySelector(".circle a").style.color = "black"
            gsap.to(".circle", {
                color: "black",
                backgroundColor: "white",
                height: "5rem",
                width: "5rem"
            })
        })
        document.querySelector(".project2").addEventListener("mouseleave", function(){
            document.querySelector(".circle").textContent = ""
            gsap.to(".circle", {
                color: "transparent",
                backgroundColor: "white",
                height: "1rem",
                width: "1rem"
            })
        })
        document.querySelector(".project3").addEventListener("mousemove", function(){
            document.querySelector(".circle").innerHTML = `<a href="#">View</a>`
            gsap.to(".circle", {
                color: "white",
                backgroundColor: "black",
                height: "5rem",
                width: "5rem"
            })
        })
        document.querySelector(".project3").addEventListener("mouseleave", function(){
            document.querySelector(".circle").textContent = "";
            gsap.to(".circle", {
                color: "transparent",
                backgroundColor: "white",
                height: "1rem",
                width: "1rem"
            })
        })
        
    }
  
}
function scanAni(){
    if(x.matches){
        document.querySelector(".scannerhead svg").addEventListener("mousemove", function(){
            gsap.to(".scannerhead svg", {
                scale: 1.2,
                duration: .5
            })
        })
        document.querySelector(".scannerhead svg").addEventListener("mouseleave", function(){
            gsap.to(".scannerhead svg", {
                scale: 1,
                duration: .5
    
            })
        })
    }
    else{
        document.querySelector(".scannerhead2 svg").addEventListener("mousemove", function(){
            gsap.to(".scannerhead2 svg", {
                scale: 1.2,
                duration: .5
            })
        })
        document.querySelector(".scannerhead2 svg").addEventListener("mouseleave", function(){
            gsap.to(".scannerhead2 svg", {
                scale: 1,
                duration: .5
    
            })
        })
    }
    
    
}
function scroll(){
    if(x.matches){
        gsap.to(".scroll", {
            x:-200,
            duration:5,
            scrollTrigger: {
                trigger: ".scroll",
                scroller: ".main",
                start: "top 60%",
                end: "top 30%",
                scrub: 3,
            }
        })
    }
    else{
        gsap.to(".scroll", {
            x:-200,
            duration:10,
            scrollTrigger: {
                trigger: ".scroll",
                scroller: ".main",
                start: "top 60%",
                end: "top 30%",
                scrub: 3,
            }
        })
    }
    
}

var x = window.matchMedia("(min-width: 600px)")

loaderAni();
circleFollow();
page1Ani();
proAni();
heroAni();
scroll();
scanAni();