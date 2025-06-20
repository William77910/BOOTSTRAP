

//Récupération des élément du formulaire
const monFormulaire = document.getElementById('monFormulaire');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputSubject = document.getElementById('inputSubject');
const inputMessage = document.getElementById('inputMessage');

//Empêcher le comportement par défaut du formulaire
monFormulaire.addEventListener('submit', function(e){  // Événement de soumission du formulaire
    e.preventDefault();                                // Empêche l'envoi du formulaire
});