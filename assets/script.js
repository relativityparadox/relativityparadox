document.addEventListener('DOMContentLoaded', function () {
    // Function to load HTML content into a placeholder
    function loadHTML(selector, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector(selector).insertAdjacentHTML('afterend', data);
                document.querySelector(selector).remove();
            })
            .catch(error => console.error('Error loading HTML:', error));
    }

    // Load resource links
    loadHTML('#resource-placeholder', '/assets/resource.html');

    // Load title logo SVG
    loadHTML('.title-logo-placeholder', '/assets/title-logo.html');

    // Load navbar logo SVG
    loadHTML('.navbar-logo-placeholder', '/assets/navbar-logo.html');

    // Load footer content
    loadHTML('.placeholder-footer', '/assets/footer.html');
});
