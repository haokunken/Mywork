$(function () {
    init_responsive();
});
function init_responsive() {
    var $body, browser_width;
    $(window).on("resize", function () {
        $body = $(document.body);
        browser_width = $body.width();

        if (browser_width < 1366) {
            $body.addClass("layout-narrow");
        } else if (browser_width < 1366) {
            $body.addClass("layout-narrow");
        } else if (browser_width >= 1366) {
            $body.removeClass("layout-narrow");
        } 
    }).trigger("resize");
}