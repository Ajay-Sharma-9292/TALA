function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "fixed"*/
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
init()

var menu = document.querySelector("#nav-prt2 i")
var full = document.querySelector("#full-scr-nav")

var flag = 0


menu.addEventListener("click", function () {
    if (flag == 0) {

        full.style.top = "0"
        document.querySelector("#nav h2").style.color = "rgb(28, 27, 27)"
        document.querySelector("#nav h3").style.color = "rgb(28, 27, 27)"
        document.querySelector("#nav i").style.color = "rgb(28, 27, 27)"
        flag = 1
    } else {
        full.style.top = "-100vh"
        document.querySelector("#nav h2").style.color = "#dadada"
        document.querySelector("#nav h3").style.color = "#dadada"
        document.querySelector("#nav i").style.color = "#dadada"
        flag = 0
    }
})

gsap.to("#page5-content img",{
    rotate:360,
    repeat:-1,
    duration:1,
    ease: Power0.easeNone
})

var tl = gsap.timeline()
tl.from("#page1 h1", {
    y: 60,
    duration: .6,
    opacity: 0
})
    .from("#page1 h2", {
        y: 50,
        duration: .5,
        opacity: 0,
        delay: "-0.2"
    })
    .from("#page1 h3", {
        y: 50,
        duration: .5,
        opacity: 0,
        delay: "-0.2"
    })


gsap.to("#page2 img", {
    scale: 0.98,
    scrollTrigger: {
        trigger: "#page2 img",
        scroller: "#main",
        // markers:true,
        start: "top 80%",
        end: "top 0%",
        scrub: 3
    }
})
gsap.to("#page2 h1", {
    rotateX: 0,
    y: 10,
    opacity: 1,
    scrollTrigger: {
        trigger: "#h11",
        scroller: "#main",
        // markers:true,
        start: "top 85%",
        end: "top 65%",
        scrub: 2
    }
})

var slide1h1 = document.querySelectorAll("#page6 .slide1-of-h1 h1")
slide1h1.forEach(function (elem) {
    gsap.to(elem, {
        transform: 'translateX(-100%)',
        duration: 4,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            scrub: 3
        }
    })
})

var slide2h1 = document.querySelectorAll("#page6 .slide2-of-h1 h1")
slide2h1.forEach(function (elem) {
    gsap.to(elem, {
        transform: 'translateX(0%)',
        duration: 4,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            scrub: 3
        }
    })
})

document.querySelector("#element1").addEventListener("mousemove", function (dets) {
    document.querySelector("#element1 img").style.opacity = 1
    document.querySelector("#element1 img").style.left = `${dets.x - 0}px`
    // document.querySelector("#element1 img").style.top = `${dets.y -530}px`
})

document.querySelector("#element2").addEventListener("mousemove", function (dets) {
    document.querySelector("#element2 img").style.opacity = 1
    document.querySelector("#element2 img").style.left = `${dets.x - 0}px`
    // document.querySelector("#element2 img").style.top = `${dets.y - 530}px`
})

document.querySelector("#element2").addEventListener("mouseleave", function (dets) {
    document.querySelector("#element2 img").style.opacity = 0
})
document.querySelector("#element1").addEventListener("mouseleave", function (dets) {
    document.querySelector("#element1 img").style.opacity = 0
})