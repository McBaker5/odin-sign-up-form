const passInput = document.querySelector('#pass');
const passConfirm = document.querySelector('#pass-confirm');
const passError = document.querySelector('#pass-error')

const checkIfPasswordsMatch = () => {
    let pass1 = passInput.value;
    let pass2 = passConfirm.value;
    
    if (pass1 === pass2) {
        passInput.setCustomValidity("");
        passConfirm.setCustomValidity("");
        passError.textContent = "";
    } else {
        const errorMsg = "Passwords do not match"
        passInput.setCustomValidity(errorMsg);
        passConfirm.setCustomValidity(errorMsg);
        passError.textContent = "* " + errorMsg;
    }
}

passInput.addEventListener('input', checkIfPasswordsMatch)
passConfirm.addEventListener('input', checkIfPasswordsMatch)