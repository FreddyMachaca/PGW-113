const firebaseConfig = {
        //configuracion de firebase
        apiKey: "TU API KEY",
        authDomain: "TU AUTH DOMAIN",
        projectId: "TU PROJECT ID",
        storageBucket: "TU STORAGE BUCKET",
        messagingSenderId: "TU MESSAGING SENDER ID",
        appId: "TU APP ID",
        measurementId: "TU MEASUREMENT ID"
};

//inicializar firebase
firebase.initializeApp(firebaseConfig);

//inicializar firestore
const db = firebase.firestore();

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()
    
    //validar campo nombre
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');
    
    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Ingrese su nombre';
        errorNombre.classList.add('error-message');
    }else{
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message');
    }
    //validar correo electronico
    let emailEntrada = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //patron de correo electronico
    
    if (!emailPattern.test(emailEntrada.value)) {
        emailError.textContent = 'Por favor ingrese un correo valido';
        emailError.classList.add('error-message');
    }else{
        emailError.textContent = '';
        emailError.classList.remove('error-message');
    }
    //validar contraseña
    let contrasenaEntrada = document.getElementById('password');
    let contrasenaError = document.getElementById('passwordError');
    //pattern regex contrasenha
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if (!contrasenaPattern.test(contrasenaEntrada.value)) {
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula, un numero y un caracter especial';
        contrasenaError.classList.add('error-message');
    }else{
        contrasenaError.textContent = '';
        contrasenaError.classList.remove('error-message');
    }

    //si todo esta bien, enviar formulario
    if(!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){

        //backend que reciba la informacion
        db.collection('users').add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            password: contrasenaEntrada.value
        })
        .then((docRef) => {
            alert('Formulario enviado exitosamente',docRef.id);
            document.getElementById('formulario').reset();
        })
        .catch((error) => {
            alert('Error al enviar el formulario',error);
        });

    }
})    
