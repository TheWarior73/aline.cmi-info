<?php

session_start();

if (isset($_SESSION["logged_in"])) {
    header("Location: dashboard.php");
} else {
    header("Location: ../errors/403.php");
}