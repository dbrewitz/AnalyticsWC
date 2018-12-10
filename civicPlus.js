//  Website customizations - David Brewitz - IT

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
    x: function () {
        $('a').each(function () {
            var href = this.href.toLowerCase()
            var wash = document.location.host
            var doc = '/documentcenter/view/'
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

if (document.readyState === 'complete') {
    WC.x();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        WC.x();
        // following is an example for tracking every hyperlink click
        // Change the 'a' below to a class or id ex: '.myClass' to get more specific
        // WC.p('a', 'hyperlink', 'Click link', 'text')
    });
}
