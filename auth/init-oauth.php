<?php

$env = parse_ini_file(__DIR__.'/../../.env');

if ($env === false) {
    $env = parse_ini_file(__DIR__.'/../.env'); // local
}

if (!isset($env['DEBUG'])) {
    $is_in_debug_mode = false;
} else {
    $is_in_debug_mode = $env['DEBUG'];
}

if ($is_in_debug_mode) { // debug stuff
    $discord_url = "https://discord.com/oauth2/authorize?client_id=1414600705909719081&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%2Faline&scope=identify+rpc+email";
} else {
    $discord_url = "https://discord.com/oauth2/authorize?client_id=1414600705909719081&response_type=code&redirect_uri=https%3A%2F%2Faline.cmi-info.fr%2Fauth%2Fprocess-oauth.php&scope=identify+rpc+email";
}

header("Location: $discord_url");
exit();

?>