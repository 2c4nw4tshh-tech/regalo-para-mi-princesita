// ==========================================
// TEXTO DE LA CARTA
// ==========================================

const letterText = `Te amo muchísimo mi princesita. De verdad, eres una de las cosas más bonitas que me han pasado en la vida y no sabes la suerte que siento de poder tenerte a mi lado.

Tengo muchísima suerte de compartir mi vida contigo. Eres una persona increíble, guapa, buena, cariñosa y, sobre todo, alguien con quien nunca me canso de estar. Incluso en los momentos más normales, simplemente estar contigo hace que todo sea mejor.

Contigo he vivido y aprendido tantas cosas… Me has acompañado en muchas de mis primeras veces, en momentos que voy a recordar siempre, y encima has conseguido hacer que sean recuerdos todavía más especiales. Y pensar que todavía nos quedan tantísimas cosas por vivir juntos me hace muchísima ilusión.

Quiero que nunca, nunca te olvides de lo muchísimo que vales. Que nunca dudes de lo especial que eres ni de todo lo bueno que tienes. Y, claramente, tampoco quiero que olvides nunca lo muchísimo que te amo, lo muchísimo que me gustas y lo feliz que me hace tenerte en mi vida.

Sé que ninguno de los dos va a estar siempre bien. Habrá días mejores y días peores, momentos en los que todo sea fácil y otros en los que las cosas cuesten un poquito más. Pero quiero que sepas que, pase lo que pase, siempre voy a intentar estar para ti. Quiero ser esa persona con la que puedas contar, alguien a quien puedas acudir cuando estés feliz, cuando estés triste, cuando necesites hablar o simplemente cuando necesites que alguien esté a tu lado.

Porque te quiero en los días buenos, pero también en los días malos. Porque quiero vivir contigo todo lo que venga.

Te amo con locura MI princesita perfecta y preciosa. 🧡

Y espero poder seguir creando contigo muchísimos recuerdos, viviendo muchísimas primeras veces y, sobre todo, compartiendo todas esas cosas que todavía nos quedan por descubrir.`;


// ==========================================
// ELEMENTOS
// ==========================================

const giftScreen = document.getElementById("gift-screen");
const envelopesScreen = document.getElementById("envelopes-screen");
const checkScreen = document.getElementById("check-screen");
const letterScreen = document.getElementById("letter-screen");

const gift = document.getElementById("gift");

const openGiftButton = document.getElementById("open-gift");
const openFirstButton = document.getElementById("open-first");
const openSecondButton = document.getElementById("open-second");

const leftEnvelope = document.getElementById("envelope-left");
const rightEnvelope = document.getElementById("envelope-right");

const singleEnvelope = document.getElementById("single-envelope");

const letter = document.getElementById("letter");
const letterTextElement = document.getElementById("letter-text");
const postscript = document.getElementById("postscript");


// ==========================================
// CAMBIAR DE PANTALLA
// ==========================================

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(element => {
        element.classList.remove("active");
    });

    screen.classList.add("active");
}


// ==========================================
// ABRIR REGALO
// ==========================================

openGiftButton.addEventListener("click", () => {

    openGiftButton.style.transition = "opacity 0.5s ease";
    openGiftButton.style.opacity = "0";

    gift.classList.add("opening");

    setTimeout(() => {

        showScreen(envelopesScreen);

        envelopesScreen.classList.add("envelopes-screen-in");

    }, 1000);

});


// ==========================================
// ABRIR PRIMER SOBRE
// ==========================================

openFirstButton.addEventListener("click", () => {

    openFirstButton.style.transition = "opacity 0.4s ease";
    openFirstButton.style.opacity = "0";

    leftEnvelope.classList.add("open");

    rightEnvelope.style.transition = "all 0.7s ease";
    rightEnvelope.style.transform = "translateX(250px)";
    rightEnvelope.style.opacity = "0";

    leftEnvelope.style.transition = "all 1s ease";
    leftEnvelope.style.transform = "translateY(-100px)";
    leftEnvelope.style.opacity = "0";

    setTimeout(() => {

        showScreen(checkScreen);

        const check = document.querySelector(".check");
        check.classList.add("show");

    }, 1000);

});


// ==========================================
// ABRIR SEGUNDO SOBRE
// ==========================================

openSecondButton.addEventListener("click", () => {

    openSecondButton.style.transition = "opacity 0.4s ease";
    openSecondButton.style.opacity = "0";

    showScreen(letterScreen);

    singleEnvelope.style.opacity = "1";

    setTimeout(() => {

        singleEnvelope.classList.add("opening");

    }, 500);

    setTimeout(() => {

        letter.classList.add("visible");

    }, 1500);

    setTimeout(() => {

        typeLetter();

    }, 2500);

});


// ==========================================
// ESCRIBIR CARTA
// ==========================================

function typeLetter() {

    let index = 0;

    // Velocidad media de lectura humana
    const typingSpeed = 50;

    function typeCharacter() {

        if (index < letterText.length) {

            letterTextElement.textContent += letterText.charAt(index);

            index++;

            setTimeout(typeCharacter, typingSpeed);

        } else {

            setTimeout(() => {

                postscript.classList.add("show");

            }, 900);

        }

    }

    typeCharacter();
}