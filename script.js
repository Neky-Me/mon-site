function verifierFormulaire() {

    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;

    if (nom == "" || email == "") {
        alert ("Merci de remplir tous les champs.");
    } else {
        alert("Message envoyé, merci " + nom + " !");
    }
}