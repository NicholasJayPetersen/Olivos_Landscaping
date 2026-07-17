document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.innerHTML = `
            <nav>
                <div id="logo">
                    <!--temporary placeholder for logo-->
                    <img src="https://imgs.search.brave.com/3U5LYlXfgNQo5WCvc8Do-1VKBKsRWWN5tGtIBr1bD0w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/LmVtb2ppLmdnL2Vt/b2ppcy8yNzk3X3do/aXRlX2NpcmNsZS5w/bmc" alt="Olivos Landscaping Logo" width="75" height="75">
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
