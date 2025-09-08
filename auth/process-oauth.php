<?php

if (!isset($_GET["code"])) {
    echo "no code";
    exit();
}

$discord_code = $_GET["code"];

$payload = [
    'code'=>$discord_code,
    'client_id'=>'1414600705909719081',
    'client_secret'=>'h5kNhjQlV_vRnabNdLYypmD_M1y0Rx7t', // will reset once I get a .env :')
    'grant_type'=>"authorization_code",
    'redirect_uri'=>"https://aline.cmi-info.fr/auth/process-oauth.php",
    'scope'=>'identify%20rpc%20email',
];

print_r($payload);

$payload_string = http_build_query($payload);
$discord_token_url = "https://discordapp.com/api/oauth2/token";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $discord_token_url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);

$result = curl_exec($ch);

if (!$result) {
    echo curl_error($ch);
}


?>