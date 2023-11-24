<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">

    <title>Celestial Project</title>

    <meta name="keywords" itemprop="keywords" content="" />
    <meta name="description" itemprop="description" content="" />

    <script src="/scripts/vendors/swiper-bundle.min.js"></script>
    <script src="/scripts/vendors/optiscroll.js"></script>
    <script src="https://api-maps.yandex.ru/2.1/?apikey=321b8b63-b0bd-4c32-a772-4c15281538ff&lang=ru_RU" type="text/javascript"></script>

    <link rel="stylesheet" href="/styles/app.css">
</head>

<body>

<div class="root">
    <header>
        <?php include "components/Header/Header.php"; ?>

        <?php include "components/Header/MobileMenu.php"; ?>

        <?php include "components/Header/MobileTabs.php"; ?>

        <?php include "components/Header/Catalog.php"; ?>
    </header>

    <main>
        <div class="container">
            <section>
                <?php include "components/Slider/Slider.php"; ?>
            </section>

            <section>
                <?php include "components/Conditions/Conditions.php"; ?>
            </section>

            <section>
                <?php include "components/Novelties/Novelties.php"; ?>
            </section>

            <section>
                <?php include "components/Banner/Banner.php"; ?>
            </section>

            <section>
                <?php include "components/Contacts/Contacts.php"; ?>
            </section>
        </div>
    </main>
</div>

<?php include "components/Modal/SignIn.php"; ?>

<?php include "components/Modal/MapBalloon.php"; ?>

<script src="/scripts/app.js" type="module"></script>
</body>
</html>
