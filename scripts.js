
// funcion puntos de habilidad
document.addEventListener('DOMContentLoaded', function() {
    const puntosMaximos = 27;
    const puntosRestantes = document.getElementById('puntosRestantes');
    const fuerzaInput = document.getElementById('fuerzaPersonaje');
    const inteligenciaInput = document.getElementById('inteligenciaPersonaje');
    const destrezaInput = document.getElementById('destrezaPersonaje');
    const crearButton = document.querySelector('button[type="submit"]');

    function actulizapuntosRestantes() {
        const puntosAsignados = 
            parseInt(fuerzaInput.value) + 
            parseInt(inteligenciaInput.value) + 
            parseInt(destrezaInput.value);
        const puntosDisponibles = puntosMaximos - puntosAsignados;

        puntosRestantes.textContent = puntosDisponibles;

        // Si los puntos restantes son cero, deshabilitar los inputs
        if (puntosDisponibles <= 0) {
            puntosRestantes.style.color = 'red';
            fuerzaInput.max = fuerzaInput.value;
            inteligenciaInput.max = inteligenciaInput.value;
            destrezaInput.max = destrezaInput.value;

            // Disable the inputs and the submit button when points are zero
            if (puntosDisponibles < 0) {
                fuerzaInput.disabled = true;
                inteligenciaInput.disabled = true;
                destrezaInput.disabled = true;
                crearButton.disabled = true;
            }
        } else {
            puntosRestantes.style.color = '#fff';
            fuerzaInput.max = parseInt(fuerzaInput.value) + puntosDisponibles;
            inteligenciaInput.max = parseInt(inteligenciaInput.value) + puntosDisponibles;
            destrezaInput.max = parseInt(destrezaInput.value) + puntosDisponibles;

            // Enable the inputs and the submit button when points are available
            fuerzaInput.disabled = false;
            inteligenciaInput.disabled = false;
            destrezaInput.disabled = false;
            crearButton.disabled = false;
        }
    }

    function enforceMaxValue(event) {
        const input = event.target;
        if (parseInt(input.value) > parseInt(input.max)) {
            input.value = input.max;
        }
        actulizapuntosRestantes();
    }

    fuerzaInput.addEventListener('input', enforceMaxValue);
    inteligenciaInput.addEventListener('input', enforceMaxValue);
    destrezaInput.addEventListener('input', enforceMaxValue);
    
    actulizapuntosRestantes();
});


// funcion registro / inicio de sesion
function showForm(formId) {
            const loginForm = document.getElementById('login');
            const registerForm = document.getElementById('register');
            const buttons = document.querySelectorAll('.tab-button');

            if (formId === 'login') {
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
                buttons[0].classList.add('active');
                buttons[1].classList.remove('active');
            } else {
                loginForm.classList.remove('active');
                registerForm.classList.add('active');
                buttons[0].classList.remove('active');
                buttons[1].classList.add('active');
            }
        }