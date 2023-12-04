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
    var currentFieldContainer = document.getElementById(currentFieldId);
    var nextFieldContainer = document.getElementById(nextFieldId);

    // Hide the current continue button and remove the border of the input field
    if (currentFieldContainer) {
        var continueButton = currentFieldContainer.querySelector('button');
        if (continueButton) {
            continueButton.style.display = 'none';
        }

        var inputField = currentFieldContainer.querySelector('input');
        if (inputField) {
            inputField.style.border = 'none'; // Remove the border
        }
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
    var phoneNumberInput = document.getElementById("phone_number-input");
    if (show) {
        phoneNumberInput.style.display = "block";
    } else {
        phoneNumberInput.style.display = "none";
    }
}
