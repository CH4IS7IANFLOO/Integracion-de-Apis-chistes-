<?php
header('Content-Type: application/json');
$url = 'https://official-joke-api.appspot.com/jokes/programming/random';
$opts = [
    'http' => [
        'method' => 'GET',
        'timeout' => 3 
    ]
];
$context = stream_context_create($opts);
$response = @file_get_contents($url, false, $context);
echo $response;
