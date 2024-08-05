document.addEventListener("DOMContentLoaded", function() {
    loadHTML('nav-placeholder', '../nav_footer/nav.html');
    loadHTML('footer-placeholder', '../nav_footer/footer.html');
});

function loadHTML(placeholderId, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const content = doc.body;
            if (content) {
                document.getElementById(placeholderId).innerHTML = content.innerHTML;
            } else {
                console.error(`No content found in ${url}`);
            }
        })
        .catch(error => console.error('Error loading HTML:', error));
}



