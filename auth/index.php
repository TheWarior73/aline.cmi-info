<?php

session_start();

if (isset($_SESSION["logged_in"])) {
    header("Location: ../admin/dashboard");
} else {
    header("Location: init-oauth.php");
}