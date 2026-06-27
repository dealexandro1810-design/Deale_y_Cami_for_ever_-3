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
titulo:"❤️ Nuestro cumplemes ❤️",
tipo:"imagen",
imagen:"foto5.jpeg",
texto:"Ese día entendí que incluso una torta sencilla podía convertirse en uno de mis recuerdos favoritos contigo."
},

{
titulo:"❤️ Nuestras llamadas ❤️",
tipo:"imagen",
imagen:"foto6.jpeg",
texto:"No importaba si la llamada duraba cinco, siete o nueve horas... nunca quería colgar porque cada minuto contigo era mi lugar favorito."
},

{
titulo:"❤️ Nuestro Chimmy ❤️",
tipo:"imagen",
imagen:"foto7.jpeg",
texto:"Quién diría que un peluche terminaría convirtiéndose en nuestro hijito. Cada vez que lo veo me acuerdo de nosotros y sonrío."
},

{
titulo:"❤️ Recuerdo ❤️",
tipo:"imagen",
imagen:"foto8.jpeg",
texto:"Aquí pondremos otro de nuestros recuerdos bonitos."
},

{
titulo:"❤️ Recuerdo ❤️",
tipo:"imagen",
imagen:"foto9.jpeg",
texto:"..."
},

{
titulo:"❤️ Recuerdo ❤️",
tipo:"imagen",
imagen:"foto10.jpeg",
texto:"..."
},

{
titulo:"❤️ Recuerdo ❤️",
tipo:"imagen",
imagen:"foto11.jpeg",
texto:"..."
},

{
titulo:"❤️ Recuerdo ❤️",
tipo:"imagen",
imagen:"foto12.jpeg",
texto:"..."
},

{
titulo:"❤️ Recuerdo ❤️",
tipo:"imagen",
imagen:"foto13.jpeg",
texto:"..."
},

{
titulo:"❤️ Video ❤️",
tipo:"video",
archivo:"video1.mp4",
texto:"❤️ Aquí irá el mensaje del primer video."
},

{
titulo:"❤️ Video ❤️",
tipo:"video",
archivo:"video2.mp4",
texto:"❤️ Aquí irá el mensaje del segundo video."
},

{
titulo:"❤️ Video ❤️",
tipo:"video",
archivo:"video3.mp4",
texto:"❤️ Aquí irá el mensaje del tercer video."
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
