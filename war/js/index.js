"use strict";

$(function() {
    show_photo();
    photo_fullview();
    url_behavior();
    url_change();
    init_map();
    countdown();
    setInterval(change_background, 3000);
});

function change_background() {
    var MAX_IDX = 7;
    var filename = 'url(../img/avatar0' + getRandomInt(1, MAX_IDX) + '.png)';
    console.log(filename);
    $('.avatar').css("background-image", filename);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function url_change() {
    $(window).on('hashchange', function(e) {
        url_behavior();
    });
}

function url_behavior() {
    var hashCode = location.hash.slice(1);
    if (hashCode == '') {
        hashCode = 'main';
    }

    $('section').hide();
    $('section#section_' + hashCode).show();

    if (hashCode === 'main') {
        $('ul.nav li').removeClass('active');
        $('li#main_menu').addClass('active');
    } else {
        $('ul.nav li').each(function() {
            $(this).removeClass('active');
            if ($(this).children('a').attr('href') === ('#' + hashCode)) {
                $(this).addClass('active');
            }
        });
    }


}

function init_map() {
    $('.map').tinyMap({
        'center': '新北市新店區北新路三段207號 京采飯店',
        'zoom': 17,
        'sensor': true,
        'language': 'zh‐TW'
    });
}

function show_photo() {
    var BreakException = {};
    var photos = getPhotoData();
    var photoDom = "";
    var today = formatDate(new Date());

    try {
        photos.forEach(function(photo) {
            if (today < photo.date) {
                throw BreakException;
            }
            photoDom += buildPhotoDom(photo);
        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }

    $('div#links').html(photoDom);
}

function buildPhotoDom(photo) {
    var photoDom = '<li class="col-sm-3 col-xs-6"><span><i class="fa fa-camera-retro"></i> ';
    photoDom += photo.date + '</span><br>';
    photoDom += '<a href="' + photo.file + '" title="' + photo.title + '" data-gallery>';
    photoDom += '<img src="' + photo.thumb + '" alt="' + photo.date + '" class="img-responsive img-thumbnail">';
    photoDom += '</a></li>';

    return photoDom;
}

function photo_fullview() {
    $('.photo_fullview').on('change', function(e) {
        if ($(this).is(":checked")) {
            $('#blueimp-gallery').removeAttr('data-use-bootstrap-modal');
            $('#blueimp-gallery').addClass('blueimp-gallery-controls');
            $('#blueimp-gallery').data('useBootstrapModal', false);
        } else {
            $('#blueimp-gallery').attr('data-use-bootstrap-modal', 'true');
            $('#blueimp-gallery').removeClass('blueimp-gallery-controls');
            $('#blueimp-gallery').data('useBootstrapModal', true);

        }
    });
}

function countdown() {
    $("#getting-started").countdown("2015/09/19 12:00:00", function(event) {
        $(this).text(
            event.strftime('再過 %D 天 %H 時 %M 分 %S 秒')
        );
    });
}

function formatDate(d) {
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();

    year = year.toString();

    month = month + 1;
    month = month + "";

    if (month.length == 1) {
        month = "0" + month;
    }

    day = day + "";

    if (day.length == 1) {
        day = "0" + day;
    }

    return year + "-" + month + "-" + day;
}
