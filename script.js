const screens=document.querySelectorAll(".screen");

document
.getElementById("startBtn")
.onclick=()=>{
    show("menu");
};

function show(id){

    screens.forEach(s=>{
        s.classList.remove("active");
    });

    document
    .getElementById(id)
    .classList.add("active");
}

function openPage(id){
    show(id);
}

function backToMenu(){
    show("menu");
}

// ===== HEART PARTICLES =====

const canvas=
document.getElementById("canvas");

const ctx=
canvas.getContext("2d");

canvas.width=
window.innerWidth;

canvas.height=
window.innerHeight;

let hearts=[];

function createHeart(){

    hearts.push({
        x:Math.random()*canvas.width,
        y:canvas.height+50,
        size:Math.random()*20+10,
        speed:Math.random()*2+1,
        alpha:1
    });
}

function drawHeart(x,y,size,a){

    ctx.save();

    ctx.translate(x,y);

    ctx.scale(size/20,size/20);

    ctx.globalAlpha=a;

    ctx.fillStyle="#ff69b4";

    ctx.beginPath();

    ctx.moveTo(0,0);

    ctx.bezierCurveTo(
        -10,-15,
        -25,5,
        0,20
    );

    ctx.bezierCurveTo(
        25,5,
        10,-15,
        0,0
    );

    ctx.fill();

    ctx.restore();
}

function animate(){

    requestAnimationFrame(
        animate
    );

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    if(
      document
      .getElementById(
        "heartPage"
      )
      .classList
      .contains("active")
    ){

        if(
          Math.random()<0.2
        ){
            createHeart();
        }

        hearts.forEach(
        (h,i)=>{

            h.y-=h.speed;

            h.alpha-=0.003;

            drawHeart(
                h.x,
                h.y,
                h.size,
                h.alpha
            );

            if(
              h.alpha<=0
            ){
                hearts.splice(i,1);
            }
        });
    }
}

animate();
function openImage(src){
    document.getElementById("popupImg").src = src;
    document.getElementById("imagePopup").style.display = "flex";
}

function closeImage(){
    document.getElementById("imagePopup").style.display = "none";
}
const photos = [
    "fasha2.jpg",
    "fasha3.jpg",
    "fasha4.jpeg",
    "fasha11.jpeg",
    "fasha12.jpeg",
    "fasha13.jpeg"
];

let currentPhoto = 0;

function openGallery(index){
    currentPhoto = index;
    document.getElementById("galleryPopup").style.display = "flex";
    showPhoto();
}

function closeGallery(){
    document.getElementById("galleryPopup").style.display = "none";
}

function showPhoto(){
    document.getElementById("popupPhoto").src = photos[currentPhoto];
    document.getElementById("photoNumber").innerHTML =
        (currentPhoto + 1) + " / " + photos.length;
}

function nextPhoto(){
    currentPhoto++;
    if(currentPhoto >= photos.length)
        currentPhoto = 0;
    showPhoto();
}

function prevPhoto(){
    currentPhoto--;
    if(currentPhoto < 0)
        currentPhoto = photos.length - 1;
    showPhoto();
}
let startX = 0;

document.getElementById("galleryPopup")
.addEventListener("touchstart", e=>{
    startX = e.touches[0].clientX;
});

document.getElementById("galleryPopup")
.addEventListener("touchend", e=>{
    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){
        nextPhoto();
    }

    if(endX - startX > 50){
        prevPhoto();
    }
});
function showForever(){

    const popup =
        document.getElementById(
            "foreverPopup"
        );

    popup.style.display =
        "flex";

    const title =
        "💍 FOREVER WITH YOU 💍";

    const message =
        "Terima kasih sudah menjadi rumah terbaikku. Aku akan selalu menjaga hati ini untukmu, hari ini, besok, dan selamanya ❤️";

    document
    .getElementById(
        "typingTitle"
    ).innerHTML = "";

    document
    .getElementById(
        "typingMessage"
    ).innerHTML = "";

    let i = 0;

    const typing =
    setInterval(()=>{

        document
        .getElementById(
            "typingTitle"
        )
        .innerHTML +=
        title.charAt(i);

        i++;

        if(i >= title.length){

            clearInterval(
                typing
            );

            typeMessage(
                message
            );
        }

    },100);

    createRain();
}

function typeMessage(text){

    let i = 0;

    const typing =
    setInterval(()=>{

        document
        .getElementById(
            "typingMessage"
        )
        .innerHTML +=
        text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(
                typing
            );
        }

    },40);
}

function createRain(){

    for(let i=0;i<150;i++){

        setTimeout(()=>{

            const heart =
                document
                .createElement(
                    "div"
                );

            heart.className =
                "falling-heart";

            heart.innerHTML =
                "❤️";

            heart.style.left =
                Math.random()*100
                +"vw";

            heart.style.top =
                "-50px";

            document.body
            .appendChild(
                heart
            );

            setTimeout(()=>{
                heart.remove();
            },5000);

        },i*50);
    }
}

function closeForever(){

    document
    .getElementById(
        "foreverPopup"
    )
    .style.display =
    "none";
}