<?php

$dataNovelties = [
    [
        'image' => '/images/novelties/card-1.jpg',
        'url' => '/'
    ],
    [
        'title' => 'Пляжные товары',
        'image' => '/images/novelties/card-2.jpg',
        'url' => '/'
    ],
    [
        'title' => 'Домашний текстиль',
        'image' => '/images/novelties/card-3.jpg',
        'url' => '/'
    ],
    [
        'title' => 'Галантерея и аксессуары',
        'image' => '/images/novelties/card-4.jpg',
        'url' => '/'
    ],
    [
        'title' => 'Средства гигиены<br> и бытовая химия',
        'image' => '/images/novelties/card-5.jpg',
        'url' => '/'
    ],
    [
        'title' => 'Праздники и подарки',
        'image' => '/images/novelties/card-6.jpg',
        'url' => '/'
    ],
    [
        'title' => 'Хозтовары',
        'image' => '/images/novelties/card-7.jpg',
        'url' => '/'
    ],
    [
        'title' => 'Спортивные товары',
        'image' => '/images/novelties/card-8.jpg',
        'url' => '/'
    ],
    [
        'title' => 'Товары для животных',
        'image' => '/images/novelties/card-9.jpg',
        'url' => '/'
    ]
]

?>

<div class="novelties_container section-margin">
    <div class="middle-wrap">
        <h2 class="h1">
            Наши новинки
        </h2>

        <div class="novelties_wrapper">
            <div class="novelties">
                <?php $index = 0; foreach ($dataNovelties as $novelties) { ?>
                    <div class="novelties_cell">
                        <a href="<?= $novelties['url'] ?>" class="novelties_card">
                            <?php if ( $index == 0 ) { ?>
                                <img src="<?= $novelties['image'] ?>" alt="" draggable="false" />
                            <?php } else { ?>
                                <div class="novelties_card-image">
                                    <img src="<?= $novelties['image'] ?>" alt="" draggable="false" />
                                </div>

                                <div class="novelties_card-caption">
                                    <?= $novelties['title'] ?>
                                </div>
                            <?php } ?>
                        </a>
                    </div>
                <?php $index++; } ?>
            </div>
        </div>
    </div>
</div>
