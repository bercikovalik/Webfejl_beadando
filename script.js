// 1 services //
document.addEventListener('DOMContentLoaded', function () {
    const typewriterText = "OUR SERVICES";
    const typewriterElement = document.getElementById('typewriter-text-services');
    let i = 0;

    function typeWriter() {
        if (i < typewriterText.length) {
            typewriterElement.innerHTML = typewriterText.substring(0, i + 1) + '<span class="cursor">|</span>';
            i++;
            setTimeout(typeWriter, 100);
        } else {
            typewriterElement.innerHTML = typewriterText + '<span class="cursor">|</span>';
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
            i++;
            setTimeout(typeWriter, 100);
        } else {
            typewriterElement.innerHTML = typewriterText + '<span class="cursor">|</span>';
            contactFormElement.style.display = 'block';
        }
    }

    typeWriter();
});

// 2 //

function toggleMenu() {
    var menuBar = document.getElementById("menu-bar");
    menuBar.classList.toggle("menu-visible");
}

// 3 //

function showNextField(currentFieldId, nextFieldId) {
    const currentInput = document.getElementById(currentFieldId);
    const currentFieldContainer = currentInput.parentElement;
    const nextFieldContainer = document.getElementById(nextFieldId + '-field');

    // Hide the input and continue button
    currentInput.style.display = 'none';
    const continueButton = currentFieldContainer.querySelector('button');
    if (continueButton) continueButton.style.display = 'none';

    // Append a span with the selected value for user visibility (only for non-hidden fields)
    if (currentInput.type !== 'hidden' && currentInput.type !== 'checkbox' && currentInput.type !== 'radio' && currentInput.type !== 'range') {
        const displayText = currentInput.value;
        const displaySpan = document.createElement('span');
        displaySpan.textContent = displayText;
        currentFieldContainer.appendChild(displaySpan);
    }

    // Show the next field
    if (nextFieldContainer) {
        nextFieldContainer.style.display = 'block';
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

function updateBudgetValue(value) {
    document.getElementById('budget-value').textContent = value;
}

// 6 //

function togglePhoneInput(show) {
    var phoneNumberInput = document.getElementById("phone-number-input");
    if (show) {
        phoneNumberInput.style.display = "block";
    } else {
        phoneNumberInput.style.display = "none";
    }
}
