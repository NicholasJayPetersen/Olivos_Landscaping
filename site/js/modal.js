import {validate} from "./regex.js";

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("modal");
    modal.innerHTML = `
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-body">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Request a Quote</h1>
                    <form action="#">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
                        <label for="email">email:</label>
                        <input type="email" id="email" name="email" required>
                        <label for="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" required>
                        <textarea id="message" name="message" placeholder="How can we help?" required></textarea>
                        <div>
                            <button type="submit" class="btn btn-primary">Send</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    `;

    const quoteForm = modal.querySelector("form");
    validate(quoteForm);

    if(localStorage.getItem("submitted") === "1")
    {
        const success = document.querySelector("#success");
        setTimeout(function () {
            success.innerHTML = `
        <div class="modal fade" id="success-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="success">
                                <p>Sent! You'll hear from us soon.</p>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const successModalElement = document.getElementById("success-modal");
        const successModal = new bootstrap.Modal(successModalElement);
        successModal.show();

        localStorage.clear();

        }, 1000);

    }
});

document.addEventListener("submit", function(){
    localStorage.setItem("submitted", 1);
});
