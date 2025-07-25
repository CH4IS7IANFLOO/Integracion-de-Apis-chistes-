// Integración de APIs - Chistes de Programadores

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chistes de Programadores</title>
    <link rel="icon" type="image/png" href="assets/img/favicon.png">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <div class="container">
        <img src="assets/img/logo.png" alt="Logo Chiste de Programador" style="width:80px; margin-bottom:10px;">
        <h1>😂 Chistes de Programadores 😂</h1>
        <div id="joke-box">
            <div id="setup" class="joke-text"></div>
            <button id="show-punchline" class="btn">Mostrar respuesta</button>
            <div id="punchline" class="joke-text hidden"></div>
        </div>
        <div class="actions">
            <button id="another-joke" class="btn">Otro chiste</button>
        </div>
        <div class="vote">
            <span>¿Te gustó el chiste?</span>
            <button id="like" class="vote-btn">👍</button>
            <button id="dislike" class="vote-btn">👎</button>
            <span id="vote-msg"></span>
        </div>
    </div>
    <script src="assets/js/config.js"></script>
    <script src="assets/js/app.js"></script>
</body>
</html>









