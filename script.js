
var crsr = document.querySelector("#cursor")
var blr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"

    blr.style.left = dets.x-200+"px"
    blr.style.top = dets.y-200+"px"
})

//cursor ke style liye



//nav ka color change karne keliye when you scroll down
gsap.to("#nav",{
    backgroundColor:"#000",
    height:"130px",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -12%",
        scrub:1
    }
})

//to change the color of page 2
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -50%",
        end:"top -80vh",
        scrub:2,
    }
})



