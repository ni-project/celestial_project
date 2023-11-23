<?php

$dataSlides = ['slide-1', 'slide-2'];

?>

<div class="ads_slider-container">
    <div class="middle-wrap">

        <div class="ads_slider swiper" id="ads_slider">
            <div class="swiper-wrapper">
                <?php foreach ($dataSlides as $slide) { ?>
                    <div class="swiper-slide">
                        <picture>
                            <source srcset="/images/slider/<?= $slide ?>-mobile.webp" media="(max-width: 540px)" type="image/webp"/>
                            <source srcset="/images/slider/<?= $slide ?>-tablet.webp" media="(max-width: 1000px)" type="image/webp"/>
                            <source srcset="/images/slider/<?= $slide ?>-desktop.webp" type="image/webp"/>
                            <img src="/images/slider/<?= $slide ?>-desktop.jpg" alt="" draggable="false" />
                        </picture>
                    </div>
                <?php } ?>
            </div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <div class="swiper-pagination"></div>
        </div>

    </div>
</div>
