<?php

session_start();

if (isset($_SESSION["logged_in"])) {
    header("Location: dashboard");
} else {
    header("Location: ../auth/init-oauth");
}