<?php

$dataContacts = [
    [
        'title' => 'Магазин на Черняховского',
        'address' => 'улица Черняховского, 100',
        'phone' => '+7 (999) 012-34-56',
        'schedule' => 'Ежедневно с 09:00 до 22:00',
    ],
    [
        'title' => 'Магазин на Блюхера',
        'address' => 'улица Блюхера, 99',
        'phone' => '+7 (999) 012-34-56 (доб. 02)',
        'schedule' => 'Ежедневно с 10:00 до 21:00',
    ]
]

?>

<div class="contacts_container section-margin">
    <div class="middle-wrap">

        <div class="contacts js-contacts">
            <div class="contacts_cell">
                <h2 class="h1">
                    Магазины
                </h2>

                <div class="form-select">
                    <div class="form-select_icon">
                        <svg width="24" height="24">
                            <use href="/images/icons/sprite.svg#select-arrow-dropdown"></use>
                        </svg>
                    </div>

                    <label>
                        <div class="form-select_caption">Екатеринбург</div>
                        <div class="form-select_placeholder active">Город</div>
                    </label>
                </div>
            </div>

            <div class="contacts_cell">
                <?php foreach ($dataContacts as $contacts) { ?>
                    <a href="#" class="contacts_address js-handle-contacts-address js-no-click">
                        <div class="contacts_address-caption">
                            <?= $contacts['title'] ?>
                        </div>

                        <p><?= $contacts['address'] ?>  </p>
                        <p><?= $contacts['phone'] ?></p>
                        <p><?= $contacts['schedule'] ?></p>
                    </a>
                <?php } ?>
            </div>

            <div class="contacts_cell">
                <div class="contacts_map" id="contacts-map"></div>

                <div class="contacts_map-control_wrapper">
                    <div class="contacts_map-control js-contacts-map-control" data-map-control="up" title="Ближе">
                        <svg width="24" height="24">
                            <use href="/images/icons/sprite.svg#map-control-up"></use>
                        </svg>
                    </div>

                    <div class="contacts_map-control js-contacts-map-control" data-map-control="down" title="Дальше">
                        <svg width="24" height="24">
                            <use href="/images/icons/sprite.svg#map-control-down"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
