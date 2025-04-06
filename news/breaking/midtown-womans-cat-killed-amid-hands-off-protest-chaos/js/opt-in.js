(function($) {
    function getCookie(identifier) {
        identifier = encodeURIComponent(identifier);

        const match = document.cookie.match(
            new RegExp('(^| )' + 'optin_' + (identifier || 'default') + '=([^;]+)')
        );

        if (match) {
            return match[2];
        }

        return false;
    }

    function setCookie(identifier) {
        identifier = encodeURIComponent(identifier);
        document.cookie = 'optin_' + (identifier || 'default') + '=1; path=/';
    }

    $(document).ready(function () {
        const teaserContent = $('#teaser-container');
        console.log(teaserContent);
        if (teaserContent.length) {
            const cookie = getCookie(teaserContent.data('identifier'));
            if (cookie) {
                teaserContent.hide();
                $('#content-container').show();
            }
        }
    });

    $(document).bind('gform_confirmation_loaded', function (e, form_id) {
        const teaserContent = $('#teaser-container');
        setCookie(teaserContent.data('identifier'));

        $.modal.close();
        teaserContent.hide();
        $('#content-container').show();
    });
})(jQuery);