/**
 * Store links used across the site.
 * Replace floofyAmazonUrl with the live Amazon product page when you have it.
 */
window.ADORA_STORE = {
    floofyAmazonUrl: "https://www.amazon.com/Floofy-Axolotl-Adora-Lin/dp/1834540496",
};

document.addEventListener("DOMContentLoaded", function () {
    var url = window.ADORA_STORE && window.ADORA_STORE.floofyAmazonUrl;
    if (!url) return;
    document.querySelectorAll("[data-amazon-link]").forEach(function (el) {
        el.setAttribute("href", url);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
    });
});
