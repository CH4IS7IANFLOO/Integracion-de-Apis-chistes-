// gestionar la interacción del usuario con los chistes y la comunicación con el backend para obtener nuevos chistes.
// app.js

const setupEl = document.getElementById('setup');
const punchlineEl = document.getElementById('punchline');
const showPunchlineBtn = document.getElementById('show-punchline');
const anotherJokeBtn = document.getElementById('another-joke');
const likeBtn = document.getElementById('like');
const dislikeBtn = document.getElementById('dislike');
const voteMsg = document.getElementById('vote-msg');

let currentJoke = null;

function showLoading() {
    setupEl.textContent = 'Cargando chiste...';
    punchlineEl.textContent = '';
    punchlineEl.classList.add('hidden');
    showPunchlineBtn.classList.remove('hidden');
    voteMsg.textContent = '';
}

async function fetchJoke() {
    showLoading();
    try {
        const res = await fetch('joke.php');
        const data = await res.json();
        currentJoke = data[0];
        setupEl.textContent = currentJoke.setup;
        punchlineEl.textContent = currentJoke.punchline;
        punchlineEl.classList.add('hidden');
        showPunchlineBtn.classList.remove('hidden');
    } catch (e) {
        setupEl.textContent = 'Error al cargar el chiste 😢';
        punchlineEl.textContent = '';
        showPunchlineBtn.classList.add('hidden');
    }
}

showPunchlineBtn.addEventListener('click', () => {
    punchlineEl.classList.remove('hidden');
    showPunchlineBtn.classList.add('hidden');
});

anotherJokeBtn.addEventListener('click', fetchJoke);

likeBtn.addEventListener('click', () => {
    voteMsg.textContent = '¡Gracias por tu voto! 😃';
});
dislikeBtn.addEventListener('click', () => {
    voteMsg.textContent = '¡Gracias por tu voto! 😅';
});

// Inicial
fetchJoke();
