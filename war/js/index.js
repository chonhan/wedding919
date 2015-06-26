"use strict";

$(function() {
    show_photo();
    url_behavior();
    url_change();
    init_map();
});

function url_change() {
    $(window).on('hashchange', function(e) {
        url_behavior();
    });
}

function url_behavior() {
    var hashCode = location.hash.slice(1);
    if (hashCode != '') {
        $('section').hide();
        $('section#section_' + hashCode).show();
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
    var photoDom = '<li class="col-xs-3">';
    photoDom += '<a href="' + photo.file + '" title="' + photo.title + '" data-gallery>';
    photoDom += '<img src="' + photo.thumb + '" alt="' + photo.date + '" class="img-responsive">';
    photoDom += '</a><span>' + photo.date + '</span></li>';

    return photoDom;
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
