

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
            y: dets.y,
            delay: 0
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
function proAni(){
    document.querySelector(".project1").addEventListener("mousemove", function(){
        gsap.to(".circle", {
            color: "white",
            backgroundColor: "black",
            height: "5rem",
            width: "5rem"
        })
       
    })
    document.querySelector(".project1").addEventListener("mouseleave", function(){
        gsap.to(".circle", {
            color: "transparent",
            backgroundColor: "white",
            height: "1rem",
            width: "1rem"
        })
        
    })
    document.querySelector(".project1").addEventListener("mousemove", function(){
        
        gsap.to(".p-box",{
            height: "50%",
            width: "50%",
            duration: 1
        })
    })
    document.querySelector(".project1").addEventListener("mouseleave", function(){
        gsap.to(".project1 img", {
            opacity: 1
        })
        gsap.to(".p-box",{
            height: "0%",
            width: "0%"
        })
    })
    document.querySelector(".project2").addEventListener("mousemove", function(){
        gsap.to(".circle", {
            color: "black",
            backgroundColor: "white",
            height: "5rem",
            width: "5rem"
        })
    })
    document.querySelector(".project2").addEventListener("mouseleave", function(){
        gsap.to(".circle", {
            color: "transparent",
            backgroundColor: "white",
            height: "1rem",
            width: "1rem"
        })
    })
    document.querySelector(".project3").addEventListener("mousemove", function(){
        gsap.to(".circle", {
            color: "white",
            backgroundColor: "black",
            height: "5rem",
            width: "5rem"
        })
    })
    document.querySelector(".project3").addEventListener("mouseleave", function(){
        gsap.to(".circle", {
            color: "transparent",
            backgroundColor: "white",
            height: "1rem",
            width: "1rem"
        })
    })
    
}
loaderAni();
// circleFollow();
proAni();
// heroAni();