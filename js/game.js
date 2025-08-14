// Lecture des paramètres d'URL
const params = new URLSearchParams(window.location.search);
const equipe = params.get("equipe");
const etapeIndex = parseInt(params.get("etape"));
const parcours = parcoursEquipes[equipe];
const lieuCode = parcours[etapeIndex];
const lieu = lieuxTempliers[lieuCode];

// Affichage de l'étape au chargement
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("enigme").textContent = lieu.enigme;

    // Cache complètement le titre au départ
    const titre = document.getElementById("lieu-nom");
    titre.style.display = "none";
    titre.classList.add("fade-in"); // on prépare la classe

    document.getElementById("narratif").style.display = "none";
    document.getElementById("indice").style.display = "none";
    document.getElementById("reponse-section").style.display = "none";
    document.getElementById("success").style.display = "none";
});

function verifierPosition() {
    if (!navigator.geolocation) {
        alert("La géolocalisation n'est pas supportée par ce navigateur.");
        return;
    }

    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const distance = getDistanceFromLatLonInM(lat, lon, lieu.gps[0], lieu.gps[1]);

        if (distance <= 25) {
            // Déplace le titre juste après le bouton
            const btn = document.getElementById("btn-verif");
            const titre = document.getElementById("lieu-nom");
            titre.textContent = lieu.nom;
            btn.parentNode.insertBefore(titre, btn.nextSibling);

            // Affiche le titre avec fade-in
            titre.style.display = "block";
            titre.classList.add("show");

            // Affiche le contenu
            document.getElementById("narratif").textContent = lieu.narratif;
            
            // Ajout du label "Indice : " devant le texte
            document.getElementById("indice").innerHTML = `<strong>Indice :</strong> ${lieu.indice}`;
            
            document.getElementById("narratif").style.display = "block";
            document.getElementById("indice").style.display = "block";
            document.getElementById("reponse-section").style.display = "block";

            // Désactive le bouton
            btn.disabled = true;
        } else {
            alert("Vous êtes trop loin du lieu. Approchez-vous encore un peu !");
        }
    });
}

function validerReponse() {
    const val = document.getElementById("reponse").value.trim();
    if (val === lieu.code) {
        document.getElementById("success").style.display = "block";
        document.getElementById("btn-valider").disabled = true;

        // Étape suivante ou finale
        if (etapeIndex + 1 >= parcours.length) {
            document.getElementById("success").innerHTML += "<br><br><strong>Félicitations ! Vous avez tous les fragments. Rendez-vous à la Place de la Sorbonne pour découvrir le trésor.</strong>";
        } else {
            document.getElementById("suivant").style.display = "inline-block";
            const nextEtape = etapeIndex + 1;
            document.getElementById("suivant").href = `etape.html?equipe=${equipe}&etape=${nextEtape}`;
        }
    } else {
        alert("Réponse incorrecte. Essayez encore !");
    }
}

// Calcule la distance en mètres entre deux points GPS
function getDistanceFromLatLonInM(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Rayon terrestre en m
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}