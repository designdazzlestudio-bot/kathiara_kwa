/* Loader */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

    setTimeout(function () {
        loader.style.display = "none";
    }, 500);

});

/*==================================
PROJECTS LIVE IMPACT DASHBOARD
==================================*/

const impactSection = document.querySelector(".projects-impact-section");

if (impactSection) {

    let played = false;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting && !played) {

                played = true;

                animateDashboard();

            }

        });

    }, {

        threshold: 0.35

    });

    observer.observe(impactSection);

}

/*==================================
MAIN FUNCTION
==================================*/

function animateDashboard() {

    /*=========================
    CARDS
    =========================*/

    const cards = document.querySelectorAll(".projects-impact-card");

    cards.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(40px)";

        setTimeout(()=>{

            card.style.transition=".7s ease";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*150);

    });

    /*=========================
    COUNTERS
    =========================*/

    document.querySelectorAll(".projects-counter").forEach(counter=>{

        const target = +counter.dataset.target;

        let current = 0;

        const speed = target/120;

        function update(){

            current += speed;

            if(current < target){

                counter.innerHTML=Math.ceil(current);

                requestAnimationFrame(update);

            }else{

                counter.innerHTML=target;

            }

        }

        update();

    });

    /*=========================
    SVG CIRCLES
    =========================*/

    document.querySelectorAll(".projects-progress-bar").forEach(circle=>{

        const radius = circle.r.baseVal.value;

        const circumference = 2*Math.PI*radius;

        circle.style.strokeDasharray = circumference;

        circle.style.strokeDashoffset = circumference;

        const percent = circle.dataset.progress;

        const offset = circumference-(percent/100)*circumference;

        setTimeout(()=>{

            circle.style.strokeDashoffset = offset;

        },300);

    });

}