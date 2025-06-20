

  //Récupération des élément du formulaire
const monFormulaire = document.getElementById('monFormulaire');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputSubject = document.getElementById('inputSubject');
const inputMessage = document.getElementById('inputMessage');
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
