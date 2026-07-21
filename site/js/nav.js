document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.innerHTML = `
            <nav>
                <div id="logo">
                    <a href="./index.html"><img src="./images/logo-transparent.png" alt="Olivos Landscaping Logo" width="75" height="75"></a>
                </div>
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./gallery.html#Gallery">Gallery</a></li>
                    <li><a href="./services.html#Services">Services</a></li>
                    <li><a href="./contact.html#contact">Contact</a></li>
                </ul>
            </nav>
            `;
});
