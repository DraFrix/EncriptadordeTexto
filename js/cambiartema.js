// Seleccionamos los elementos
const body = document.body;
const header = document.body.header;
const iconoSol = document.getElementById('icono-sol');
const iconoLuna = document.getElementById('icono-luna');
const themeToggle = document.querySelector('.theme-toggle');

// Verificar si el usuario tiene una preferencia almacenada
const modoGuardado = localStorage.getItem('modo-tema');
if (modoGuardado === 'oscuro') {
    body.classList.add('dark-mode');
    iconoSol.classList.add('invisible');
    iconoLuna.classList.remove('invisible');
} else {
    body.classList.add('light-mode');
}

// Escuchar el clic en el botón de cambio de modo
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        header.classList.replace('light-mode', 'dark-mode');
        iconoSol.classList.add('invisible');
        iconoLuna.classList.remove('invisible');
        localStorage.setItem('modo-tema', 'oscuro');
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        header.classList.replace('dark-mode', 'light-mode');
        iconoSol.classList.remove('invisible');
        iconoLuna.classList.add('invisible');
        localStorage.setItem('modo-tema', 'claro');
    }
});

document.getElementById('titulo-encriptador').addEventListener('click', function() {
    window.location.reload();
});
