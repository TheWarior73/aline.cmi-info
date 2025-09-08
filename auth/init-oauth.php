<?php

$discord_url = "https://discord.com/oauth2/authorize?client_id=1414600705909719081&response_type=code&redirect_uri=https%3A%2F%2Faline.cmi-info.fr%2Fauth%2Fprocess-oauth.php&scope=identify+rpc+email";
header("Location: $discord_url");
exit();

?>