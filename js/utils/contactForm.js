const main = document.getElementById("main"); 
const modal = document.getElementById("contact_modal"); 
const openModalBtn = document.querySelector(".contact_button"); 
const closemodalBtn = document.querySelector(".close-modal"); 

function displayModal() {
	modal.style.display = "block";
    main.setAttribute("aria-hidden", "true");
    modal.setAttribute("aria-hidden", "false");
    openModalBtn.focus();
}

function closeModal() {
    modal.style.display = "none";
    main.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-hidden", "true");
    closemodalBtn.focus();
}

function handleSubmit(event){
    event.preventDefault();
    
    const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log("Prénom:", prenom);
    console.log("Nom:", nom);
    console.log("email:", email);
    console.log("message:", message);

    closeModal();

}

document.getElementById('contactForm').addEventListener('submit', handleSubmit);
