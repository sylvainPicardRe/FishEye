const main = document.getElementById("main"); 
const modal = document.getElementById("contact_modal"); 
const openModalBtn = document.querySelector(".contact_button"); 
const closemodalBtn = document.querySelector(".close-modal"); 
const form = document.getElementById("contactForm");

// Récupération des champs de formulaire
const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

export function displayModal() {
	modal.style.display = "block";
    main.setAttribute("aria-hidden", "true");
    modal.setAttribute("aria-hidden", "false");
    openModalBtn.focus();
}

export function closeModal() {
    modal.style.display = "none";
    main.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-hidden", "true");
    closemodalBtn.focus();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(validate()) {
        console.log("Prénom:", prenom);
        console.log("Nom:", nom);
        console.log("email:", email);
        console.log("message:", message);
        form.reset();
    }
});

function validate(){
    const emailRegExp = new RegExp("[a-z._-]+@[a-z._-]+");

  
    // Récupération des éléments d'erreur
    // const lastError = document.getElementById("last-error");
    // const firstError = document.getElementById("first-error");
    // const emailError = document.getElementById("email-error");
    // const birthdateError = document.getElementById("birthdate-error");
    // const quantityError = document.getElementById("quantity-error");
    // const localisationError = document.getElementById("localisation-error");
    // const agreeError = document.getElementById("agree-error");
  
    // Réinitialisation des messages d'erreur
    // lastError.textContent = "";
    // firstError.textContent = "";
    // emailError.textContent = "";
    // birthdateError.textContent = "";
    // quantityError.textContent = "";
    // agreeError.textContent = "";
  
    let isValid = true;
  
    // Validation du champ Nom
    // if (last === "" || last.length < 2){
    //   lastField.classList.add("error");
    //   lastError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    //   isValid = false;
    // } else {
    //   lastField.classList.remove("error");
    // }
  
    /// Validation du champ Prénom
    // if (first === "" || first.length < 2){
    //   firstError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    //   firstField.classList.add("error");
    //   isValid = false;
    // } else {
    //   firstField.classList.remove("error");
    // } 
  
//     // Validation du champ Email
//     if (email === "" || !emailRegExp.test(email)){
//       emailError.textContent = "Veuillez entrer une adresse email valide";
//       emailField.classList.add("error");
//       isValid = false;
//     } else {
//       emailField.classList.remove("error");
//     }
    
//     // Validation du champ Date de naissance
//     if (birthdate === ""){
//       birthdateError.textContent = "Vous devez entrer votre date de naissance.";
//       birthdateField.classList.add("error");
//       isValid = false;
//     } else {
//       birthdateField.classList.remove("error");
//     }
  
//     // Validation du champ Quantité
//     if (isNaN(quantity) || quantity === "" || quantity < 0){
//       quantityError.textContent = "Veuillez saisir une quantité";
//       quantityField.classList.add("error");
//       isValid = false;
//     } else {
//       quantityField.classList.remove("error");
//     }
  
//     // Validation de la sélection de localisation
//     if(!localisationCheck()){
//       localisationError.textContent = "Vous devez sélectionner une ville.";
//       isValid = false
//     } else {
//       localisationError.classList.remove("error");
//     }
  
//     // Validation de l'accord sur les termes
//     if (!agree){
//       agreeError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
//       isValid = false;
//     } else {
//       agreeField.classList.remove("error");
//     }
//     return isValid;
}

// document.getElementById('contactForm').addEventListener('submit', handleSubmit);
