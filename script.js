const boton = document.getElementById("startButton");

boton.addEventListener("click", () => {
    document.getElementById("capitulo1").scrollIntoView({
        behavior: "smooth"
    });
});

const memoryBox = document.getElementById("memoryBox");
const heartContainer = document.getElementById("heartContainer");

memoryBox.addEventListener("click", () => {

    memoryBox.style.display = "none";

    heartContainer.style.display = "flex";

    mainHeart.style.display = "block";

    memoryGrid.style.display = "none";

    closeMemories.style.display = "none";

});

const mainHeart = document.getElementById("mainHeart");
const memoryGrid = document.getElementById("memoryGrid");
const closeMemories = document.getElementById("closeMemories");

mainHeart.addEventListener("click", () => {

    mainHeart.style.display = "none";

    memoryGrid.style.display = "grid";

    closeMemories.style.display = "inline-block";

});

const recuerdos = [

{
titulo:"❤️ maincra ❤️",
tipo:"imagen",
imagen:"foto5.jpeg",
texto:"Me gustaba mucho lo gran aplanadora de terrenos que eres mi amor, difruto jugar de este jueguito de cubitos contigo mi amor, aún me acuerdo de las casas que tenemos en nuestro mundo y al pusheen tmb obvio que sí me acuerdo de eso mi amor"
},

{
titulo:"❤️ robloxito ❤️",
tipo:"imagen",
imagen:"foto6.jpeg",
texto:"Amor quiero que sepas que eres mi jugadora de roblox fav, eres demasiado pro mi amorxito"
},

{
titulo:"❤️ Musica ❤️",
tipo:"imagen",
imagen:"foto7.jpeg",
texto:"Me gusta mucho que compartamos canciones que escuchamos aún así no seamos fan del artista <3."
},

{
titulo:"❤️ mi barbita ❤️",
tipo:"imagen",
imagen:"foto8.jpeg",
texto:"Aún recuerdo cuando me arrancabas los pelitos de la barba y la pasabas bien haciendolo, (yo para nada sufría)."
},

{
titulo:"❤️ Chimmyyyy ❤️",
tipo:"imagen",
imagen:"foto9.jpeg",
texto:"Una de las últimas fotos que nos tomamos estando juntos presencialmente, y con nuestro hijo, siento que los demás se van a poner celosos jkskjwwkjw"
},

{
titulo:"❤️ kjwjkwjk ❤️",
tipo:"imagen",
imagen:"foto10.jpeg",
texto:"Somosh guaposh"
},

{
titulo:"❤️ uwu ❤️",
tipo:"imagen",
imagen:"foto11.jpeg",
texto:"Foto patas cutesyy"
},

{
titulo:"❤️ robloxito ❤️",
tipo:"imagen",
imagen:"foto12.jpeg",
texto:"Me gusto fucho esta foto mi amor siento que nuestros personajes de roblox son tal para cual"
},

{
titulo:"❤️ :v ❤️",
tipo:"imagen",
imagen:"foto13.jpeg",
texto:"Aún sigo sin creer como corté tan bien la torta mi amor, y el video que le hice salió chévere también"
},

{
titulo:"❤️ Bexito ❤️",
tipo:"video",
archivo:"video1.mp4",
texto:"❤️ Sinceramente uno de los videos más lindos que tenemos es este mi amor, te amo demasiado mi vida, te envío unos bexotes a la distancia."
},

{
titulo:"❤️ El arbolito ❤️",
tipo:"video",
archivo:"video2.mp4",
texto:"❤️ kjwkjwkjw, me da felicidad ver estos video y lo bien que la pasabamos juntos mi vida."
},

{
titulo:"❤️ Un hasta pronto ❤️",
tipo:"video",
archivo:"video3.mp4",
texto:"❤️ Y quien diría que solamente falta un mes para reencontrarnos de nuevo mi amor, estoy muy ansioso porque ese día llegue y volvamos sacarnos risas en persona."
}

];

const hearts = document.querySelectorAll(".memory-heart");

const modal = document.getElementById("memoryModal");
const closeModal = document.getElementById("closeModal");

const memoryImage = document.getElementById("memoryImage");
const memoryVideo = document.getElementById("memoryVideo");
const videoSource = document.getElementById("videoSource");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");
hearts.forEach((heart) => {

    heart.addEventListener("click", () => {

        const id = heart.dataset.id;
        const recuerdo = recuerdos[id];

        memoryTitle.textContent = recuerdo.titulo;
        memoryText.textContent = recuerdo.texto;

        if (recuerdo.tipo === "video") {

            memoryImage.style.display = "none";

            memoryVideo.style.display = "block";

            videoSource.src = recuerdo.archivo;

            memoryVideo.load();

        } else {

            memoryVideo.pause();

            memoryVideo.style.display = "none";

            memoryImage.style.display = "block";

            memoryImage.src = recuerdo.imagen;

        }

        modal.style.display = "flex";

    });

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

    memoryVideo.pause();

});
closeMemories.addEventListener("click", () => {

    memoryGrid.style.display = "none";

    heartContainer.style.display = "none";

    memoryBox.style.display = "block";

    closeMemories.style.display = "none";

});
