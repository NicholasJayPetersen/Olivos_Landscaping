document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.innerHTML = `
            <nav>
                <a href="./index.html">
                    <div id="logo">
                        <img src="./images/logo-transparent.png" alt="Olivos Landscaping Logo" width="75" height="75">
                        <p>Olivo's Landscaping</p>
                    </div>
                </a>
                <button id="quote-button" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Quote</button>
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./gallery.html#Gallery">Gallery</a></li>
                    <li><a href="./services.html#Services">Services</a></li>
                    <li><a href="./contact.html#contact">Contact</a></li>
                </ul>
            </nav>
        `;

    const modal = document.querySelector("#modal");
    modal.innerHTML = `
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Request a Quote</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="" method="post">
                        <for id="name">Name:</for>
                        <input type="text" id="name" name="name" required>
                        <for id="email">email:</for>
                        <input type="email" id="email" name="email" required>
                        <for id="phone">Phone:</for>
                        <input type="tel" id="phone" name="phone" required>
                        <textarea id="message" name="message" placeholder="How can we help?" width="200px" height="100px" required></textarea>
                        <button type="button" class="btn btn-primary">Send</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>
                </div>
            </div>
        </div>
    `;
});
