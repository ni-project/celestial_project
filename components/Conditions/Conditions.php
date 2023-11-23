<?php

$dataConditions = [
    'Прямые поставки <br>от производителей' => '/images/icons/sprite.svg#condition-1',
    '30 лет опыта<br>продаж' => '/images/icons/sprite.svg#condition-2',
    'Более 100 000<br>товаров' => '/images/icons/sprite.svg#condition-3',
    'Склад категории А<br>14 000 м<sup>2</sup>' => '/images/icons/sprite.svg#condition-4',
    'Доставка по России<br>и странам ЕАЭС' => '/images/icons/sprite.svg#condition-5',
]

?>

<div class="conditions_container">
    <div class="middle-wrap">

        <div class="conditions">
            <div class="conditions_wrapper">
                <?php foreach ($dataConditions as $title => $urlIcon) { ?>
                    <div class="conditions_item">
                        <svg width="40" height="40">
                            <use href="<?= $urlIcon ?>"></use>
                        </svg>
                        <div class="conditions_item-description">
                            <?= $title ?>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>

    </div>
</div>
