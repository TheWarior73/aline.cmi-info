<?php

if (!isset($_GET["code"])) {
    header("Location: /errors/400");
    return;
}

$path = __DIR__ . '/../../.env';

if (!file_exists($path)) {
    $path = __DIR__ . '/../.env';
}

$env = parse_ini_file($path);

// debug shit
if (!isset($env['DEBUG'])) {
    $is_in_debug_mode = false;
} else {
    $is_in_debug_mode = $env['DEBUG'];
}


if ($is_in_debug_mode) { // debug stuff
    $redirect_uri = "http://localhost/aline";
} else {
    $redirect_uri = "https://aline.cmi-info.fr/auth/process-oauth.php";
}

$discord_code = $_GET["code"];
$client_secret = $env['CLIENT_SECRET'];

$payload = [
    'code'=>$discord_code,
    'client_id'=>'1414600705909719081',
    'client_secret'=>$client_secret,
    'grant_type'=>"authorization_code",
    'redirect_uri'=>$redirect_uri,
    'scope'=>'identify%20rpc%20email',
];


$payload_string = http_build_query($payload);
$discord_token_url = "https://discordapp.com/api/oauth2/token";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $discord_token_url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

if ($is_in_debug_mode) { // debug stuff
    $verifypeer = 0;
    $verifyhost = 0;
} else {
    $verifypeer = true;
    $verifyhost = 2;
}

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, $verifypeer);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, $verifyhost);

$result = curl_exec($ch);

if (!$result) {
    $error = curl_error($ch);
    echo $error;
}

$result = json_decode($result, true);
$access_token = $result["access_token"];

$discord_users_url = "https://discordapp.com/api/users/@me";
$header = array("Authorization: Bearer $access_token", "Content-Type: application/x-www-form-urlencoded");

$ch = curl_init();
curl_setopt( $ch, CURLOPT_HTTPHEADER, $header);
curl_setopt( $ch, CURLOPT_URL, $discord_users_url);
curl_setopt($ch, CURLOPT_POST, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, $verifyhost);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, $verifypeer);

$result = curl_exec($ch);

$result = json_decode($result, true);

// session starting
if ($result["id"] != "526790971145453578") { // magic number

    header("Location: /errors/403");

} else {
    session_start();
    $_SESSION["logged_in"] = true;
    $_SESSION["userData"] = [
        "name"=> $result["username"],
        "discord_id"=> $result["id"],
    ];
       
    header("Location: /admin/dashboard");
}