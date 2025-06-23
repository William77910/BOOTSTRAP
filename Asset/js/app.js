//Récupération des élément du formulaire
const monFormulaire = document.getElementById("monFormulaire");
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputSubject = document.getElementById("inputSubject");
const inputMessage = document.getElementById("inputMessage");
/*
Empêcher le comportement par défaut du formulaire
monFormulaire.addEventListener('submit', function(e){  // Événement de soumission du formulaire
    e.preventDefault();                                // Empêche l'envoi du formulaire

if (inputName.value.trim() === '' || inputEmail.value.trim() === '' || inputSubject.value.trim() === '' || inputMessage == null){
        inputName.value = 'erreur : le champ ne peut pas être vide';
        inputName.style.border = 'solid 1px red'; // Mettre une bordure rouge pour indiquer l'erreur
        return;
}
        inputName.textContent = 'formulaire soumis avec le nom : ${inputName},${inputEmail},${inputSubject},${inputMessage}';
        inputName.style.border = 'solid 1px green';
        monFormulaire.reset();
});
*/
//MA VERSION (problème)
/*
// Fonction de vérification du formulaire
function checkForm() {
    const inputs = doncument.querySelectorAll('#monFormulaire input, #monFormulaire textarea');
    let formIsValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.border = '2px solid red'
            formIsValid = false;
        }else {
            input.style.border = '2px solid green';
        }
    });
    return formIsValid;
}
// vérification à la soumission
document.getElementById('monFormulaire').addEventListener('submit', function(event) {
    if(!checkForm()) {
        event.preventDefault();
        alert('Veuillez remplir tous les champs du Formulaire.');
    }
});

// Verification en temps réel
document.querySelectorAll('#monFormulaire input, #monFormulaire textarea').forEach(input => {
    input.addEventListener('input', function() {
        if(this.value.trim() === ''){
            this.style.border = '2px solid red';
        } else{
            this.style.border = '2px solid green'
        }
    });
});
*/
/*
// VERSION DE CHRISTIAN
// Fonction de vérification du formulaire
function checkForm() {
    const inputs = document.querySelectorAll('#monFormulaire input, #monFormulaire textarea');
    let formIsValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.border = '2px solid red';
            formIsValid = false;
        }else {
            input.style.border = '2px solid green';
        }
    });
    return formIsValid;
}
// Vérification à la soumission
document.getElementById('monFormulaire').addEventListener('submit', function(event) {
    if(!checkForm()) {
        event.preventDefault();
        alert('Veuillez remplir tous les champs du formulaire.');
    }
});

// Vérification en temps réel
document.querySelectorAll('#monFormulaire input, #monFormulaire textarea').forEach(input => {
    input.addEventListener('input', function() {
        if(this.value.trim() === ''){
            this.style.border = '2px solid red';
        } else{
            this.style.border = '2px solid green'
        }
    });
});
*/

// REPRISE DEPUIS LE DEBUT
// Attendre que le DOM soit complètement chargé
document.addEventListener("DOMcontentLoaded", function () {
  // ===== PROTECTION CONTRE LES ATTAQUES XSS ====
  // La fonction escapeHtml convertit les caractères spéciaux en entités HTML
  // Cela empêche l'injection de code malveillant (attaques XSS)
  // Par exemple: "<script>" devient "<script>" et ne sera pas exécuté comme du code
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;") // Remplace & par &amp;
      .replace(/</g, "<") // Remplace < par &lt;
      .replace(/>/g, ">") // Remplace > par &gt;
      .replace(/"/g, "&quot;") // Remplace " par &quot;
      .replace(/'/g, "&#039;"); // Remplace ' par &#039;
  }

  //==== VALIDATION DU FORMULAIRE ====
  // Cette fonction vérifie si tous les champs du formulaire sont remplis
  function checkForm() {
    // Sélectionne tous les champs du formulaire
    const inputs = document.querySelectorAll("#monFormulaire input, #monFormulaire textarea");
    let formIsValid = true;

    // Parcourt chaque champ pour vérifier s'il est vide
    inputs.forEach(input => {
      // trim() enlève les espaces au début et à la fin du texte
      if (input.value.trim() === '') {
        // Si le champ est vide, on ajoute une bordure rouge
        input.style.border = "2px solid red";
        formIsValid = false;
      } else {
        // Si le champ est rempli, on ajoute une bordure verte
        input.style.border = "2px solid green";
      }
    });
    // Retourne true si tous les champs sont remplis, false sinon
    return formIsValid;
  }

  // ==== PREPARATION DES DONNEES POUR LE BACKEND ====
  // Cette fonction récupère les valeurs du formulaire et les sécurise contre les attaques XSS
  function prepareDataForBackend() {
    // Sélectionne tous les champs du formaulaire (input et textarea)
    const formElements = document.querySelectorAll("#monFormulaire input, #monFormulaire textarea");
    // Crée un objet vide pour stocker les données
    const sanitizedData = {};

    // Parcourt chaque champ du formulaire
    formElements.forEach(input => {
      if (input.name) {
        // Pour chaque champ, on ajoute sa valeur sécurisée à l'objet
        // La clé est le nom du champ (name), la valeur est le contenu sécurisé
        sanitizedData[input.name] = escapeHtml(input.value);
      }
    });
    // Retoure l'objer contenant les données sécurisées
    return sanitizedData;
  }

  // ==== GESTION DE LA SOUMISSION DU FORMULAIRE ====
  // Récupère le formulaire par son ID
  const form = document.getElementById("monFormulaire");

  if (form) {
    // Ajoute un écouteur d'événement sur la soumission du formulaire
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Vérifie si le formulaire est valide (tous les champs remplis)
      if (!checkForm()) {
        // Vérifie si le formulaire est valide (tous les champs remplis)
        alert(' Veuillez remplir tous les champs du formulaire. ');
        return; // return pour sortir
      }

      // Si le formulaire est valide, prépare les données sécurisées
      const sanitizedData = prepareDataForBackend();

      //Affiche les données dans la console (pour démonstration)
      // Dans un cas réel, on enverrait ces données à un serveur
      console.log('Données prêtes pour envoi au backend:', sanitizedData);

      // ==== AFFICHAGE DU MESSAGE DE SUCCES ====
      // Récuprère les éléments necessaires
      const form = document.getElementByID('form-container');
      const successMessage = document.getElementById('success-message');

      // Cache le formulaire et affiche le message de succès
      if (form && successMessage) {
        form.style.display = "none";
        successMessage.style.display = 'block';
      }
    });
  }
  // ==== VALIDATION EN TEMPS REEL ====
    // Sélectionne tous les champs de mon formulaire
    const inputs = document.querySelectorAll('#monFormulaire input, #monFormulaire textarea');
    // Pour chaque champ, ajoute un écouteur d'événement sur la saisie du champ
    inputs.forEach(input =>{
      // L'événement 'input' se déclenche à chaque midification du champ
      input.addEventListener('input', function(){
      // Vérifie si le champ est vide
      if(input.value.trim() === ''){
        // Si vide, bordure rouge
        input.style.border = '2px solid red';
      }else{
        // Si rempli, bordure verte
        input.style.border = '2px solid green';
      }
    });
  });
});
