// Función para generar la contraseña
function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecialChars = document.getElementById('specialChars').checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    let validChars = '';
    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSpecialChars) validChars += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars.charAt(randomIndex);
    }

    document.getElementById('password').value = password;

    // Mostrar el botón de "Copiar contraseña" después de generarla
    const copyBtn = document.getElementById('copyBtn');
    copyBtn.style.display = 'inline';
}

// Función para copiar la contraseña al portapapeles
function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand('copy');

    alert('Contraseña copiada al portapapeles: ' + passwordField.value);
}
