//  Website customizations

// custom js and GA event Tracking
var WC = {


// set your type to what attribute you want sent - title, alt, value, href, or text

    p: function (element, cat, action, type) {
        $(element).each(function () {
            var label = type;
            if (label === 'title') {
                label = $(this).attr('title');
            } else if (label === 'value') {
                label = $(this).attr('value');
            } else if (label === 'alt') {
                label = $(this).attr('value');
            } else if (label === 'text') {
                label = this.text;
            }
            $(this).click(function () {
                ga('send', 'event', cat, action, label);
            });
        });

    },
    s: function () {
        $('#searchButton').click(function () {
            ga('send', 'event', 'Search Term', 'Search', document.getElementById('q').value);
        });
        $('input#searchForm').keypress(function (event) {
            if (event.keyCode == 13) {
                ga('send', 'event', 'Search Term', 'Search', document.getElementById('q').value);
            }
        });
    },
    x: function () {
        $('a').each(function () {
            var href = this.href
            var wash = document.location.host
            var doc = '/DocumentCenter/View/'
            if (href.indexOf(wash) < 0) {
                $(this).click(function () {
                    ga('send', 'event', 'external Link', this.href, this.text)
                })
            } else if (href.indexOf(doc) > -1) {
                $(this).click(function () {
                    ga('send', 'event', 'Document Center', this.href, this.text)
                })
            }
        })
    },
};

document.addEventListener('DOMContentLoaded', function () {
    WC.s();
    WC.x();
    // following is an example for tracking every hyperlink click
    //Change the 'a' below to a class or id ex: '.myClass' to get more specific
    // WC.p('a', 'hyperlink', 'Click link', 'text')
});
