"use strict";

$(function() {
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
    console.log('hash:' + hashCode);
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
