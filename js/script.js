$(function () {
    $('.hover-image').hover(
        function () {
            // 滑鼠移入時更換圖片
            var hoverSrc = $(this).data('hover');
            $(this).attr('data-default', $(this).attr('src')); // 儲存原始圖片
            $(this).attr('src', hoverSrc);
        },
        function () {
            // 滑鼠移出時還原圖片
            var hoverSrc = $(this).attr('data-default');
            $(this).attr('src', hoverSrc);
        });

    /* jQueryUI tabs */
    $("#tabs").tabs();
});
lightbox.option({
    'fadeDuration': 500,
    'resizeDuration' : 1000,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true
    // 'disableScrolling': true
  });