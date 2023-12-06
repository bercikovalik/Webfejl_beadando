// 1 services //
document.addEventListener('DOMContentLoaded', function () { 
    const typewriterText = "OUR SERVICES";
    const typewriterElement = document.getElementById('typewriter-text-services');
    let i = 0;

    function typeWriter() {
        if (i < typewriterText.length) {
            typewriterElement.innerHTML = typewriterText.substring(0, i + 1) + '<span class="cursor">|</span>';
            i++; setTimeout(typeWriter, 100); /*Növeli az i változót, majd 100 milliszekundum után újra meghívja a typeWriter függvényt*/
        } else {
            typewriterElement.innerHTML = typewriterText + '<span class="cursor">|</span>'; /* Ha már teljes a szöveg, megtartja a szöveget és a kuzort*/
        }
    }

    typeWriter();
});
// 1 contact us //
document.addEventListener('DOMContentLoaded', function () {
    const typewriterText = "Welcome to Tech Vibe Solutions! <br>Here you can get in touch with us.";
    const typewriterElement = document.getElementById('typewriter-text');
    const contactFormElement = document.getElementById('contact-form');
    let i = 0;

    function typeWriter() {
        if (i < typewriterText.length) {
            typewriterElement.innerHTML = typewriterText.substring(0, i + 1) + '<span class="cursor">|</span>';
            i++; setTimeout(typeWriter, 100);
        } else {
            typewriterElement.innerHTML = typewriterText + '<span class="cursor">|</span>';
            contactFormElement.style.display = 'block';
        }
    }

    typeWriter();
});

// 2 //

function toggleMenu() {
    const menuBar = document.getElementById("menu-bar");
    menuBar.classList.toggle("menu-visible");
}

// 3 //

function showNextField(currentFieldId, nextFieldId) {
    const currentFieldContainer = document.getElementById(currentFieldId);
    const nextFieldContainer = document.getElementById(nextFieldId);

    if (currentFieldContainer) { /* Létezik-e a mező*/
        const continueButton = currentFieldContainer.querySelector('button'); /*Megkeresi a folytatás gombot */
        if (continueButton) {
            continueButton.style.display = 'none'; /*Ha van gomb, elrejti. */
        }

        const inputField = currentFieldContainer.querySelector('input'); /*Megkeresi az input mezőt */
        if (inputField) {
            inputField.style.border = 'none'; /* Ha van, eltünteti a borderjét */
        }
    }

    if (nextFieldContainer) { 
        nextFieldContainer.style.display = 'block'; /*Ha van következő input mező, megjeleníti azt. */
    }
}

// 4 //

function checkOtherService(value) {
    if (value === 'Other') {
        document.getElementById('other-service').style.display = 'block';
    } else {
        document.getElementById('other-service').style.display = 'none';
    }
}

// 5 //


const budgetSlider = document.getElementById('budget-slider');
const sliderValue = document.getElementById('slider-value');

budgetSlider.addEventListener('input', () => {
  sliderValue.textContent = budgetSlider.value;
});


// 6 //

function togglePhoneInput(show) {
    const phoneNumberInput = document.getElementById("phone_number-input");
    if (show) {
        phoneNumberInput.style.display = "block";
    } else {
        phoneNumberInput.style.display = "none";
    }
}
