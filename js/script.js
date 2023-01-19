gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline()
tl.to('.curtain1',{
    y:"-100vh",
    opacity:'1',
    ease:'power3',
    duration:1.5
})
.to('.curtain2',{
    y:"-100vh",
    opacity:'1',
    ease:'power3',
    duration:1.5
},'<.5')
.to('.curtain3',{
    y:"-100vh",
    opacity:'1',
    ease:'power3',
    duration:1.5
},'<.5')
.to('.curtain4',{
    y:"-100vh",
    opacity:'1',
    ease:'power3',
    duration:1.5
},'<.5')
.to('.curtain-container',{
    y:"-100vh",
})
.from('.home-left-text-container',{
    x:'-50%',
    opacity:'0'
},.9)
.from('.landing-text-rotate',{
    y:'100px',
    opacity:'0'
},2)
.from('.side-text',{
    x:'100px',
    rotate:280,
    opacity:'0',
    scale:0,
    duration:.9,
},2)
.from('.ck',{
    opacity:'0',
    y:'90px',
    ease:'elastic',
    duration:2
},2.4)
.from('.home-right-container',{
    opacity:'0',
    duration:1,
 },1.6)
 .from('.home-right-img-container',{
    y:'180px',
    opacity:'0'
 },'<.1')
 .from('#home-right-img',{
    y:'100px',
     opacity:'0',
    duration:1
},'<.4')

const text = new SplitType('.details-heading')
const text_second = new SplitType('.details-second-heading')

gsap.utils.toArray('#details').forEach((section,i) => {
    tl.to('.girl-img',{
        scrollTrigger:{
            trigger:section,
            scrub: 2,
            pin:true,
            pinSpacing:true,
            start:'top top',
            toggleActions:'restart pause reverse pause',
        },
        scale:'1.2',
        duration:'.2',
    })

    
tl.to(".char",{
    scrollTrigger:{
        trigger:section,
        scrub: 2,
        start:'top top',
        toggleActions:'restart pause reverse pause',
        pinSpacing:false,
    },
    scale:'1',
    ease:'power2',
    duration:'1',
    stagger:'.5'
})
})




gsap.utils.toArray('.details-text').forEach((text,i)=>{
    tl.to(text,{
        opacity:'1',
        y:'0',
        scrollTrigger:{
            trigger:'.details',
            scrub: 2,
            start:'top top',
            toggleActions:'restart pause reverse pause',
            pinSpacing:false,
        },
    },.5)
})


tl.to('.girl-second-img',{
    scrollTrigger:{
        trigger:'.details-second',
        scrub: 2,
        pin:true,
        pinSpacing:true,
        start:'top top',
        toggleActions:'restart pause reverse pause',
    },
    scale:'1.2',
    duration:'.2',
    height:'100%'
})
tl.to(".char",{
    scrollTrigger:{
        trigger:'.details-second',
        scrub: 2,
        start:'top top',
        toggleActions:'restart pause reverse pause',
        pinSpacing:false,
    },
    scale:'1',
    ease:'power2',
    duration:'1',
    stagger:'.5'
})
gsap.utils.toArray('.details-second-text').forEach((text,i)=>{
    tl.to(text,{
        opacity:'1',
        y:'0',
        scrollTrigger:{
            trigger:'.details-second',
            scrub: 2,
            start:'top top',
            toggleActions:'restart pause reverse pause',
            pinSpacing:false,
        },
    },.5)
})
