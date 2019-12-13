// Récupérer le wrapper (constante ou variable ?) puis vérifier avec console.log
// Créer un tableau contenant le lien des slides
// Afficher la première image dans le wrapper (innerHTML)
// Récupérer les boutons (constante ou variable ?)
// Ajouter des évènements au click sur ces boutons console.log
// Ajouter un index de position pour récupérer l'image du tableau dynamiquement (constante ou variable ?)
// Passer de "Afficher la première image dans le wrapper" à "Afficher l'image correspondant à la position dans le wrapper"
// Incrémenter la position au clic droit et changer l'image dans le wrapper
// au clic sur la flèche de droite, faire un petit algorithme qui gèrera la position quand j'arrive en fin de tableau
// Refaire la même chose pour le clic gauche
// Externaliser la gestion de la position dans une fonction "changePosition(direction)"
// Refacto


// Il faut que :
// Je puisse rajouter une image à mon tableau sans avoir à toucher à la logique de mon code


const WRAPPER = document.getElementById('wrapper');
const LEFT_ARROW = document.getElementById("left-arrow");
const RIGHT_ARROW = document.getElementById("right-arrow");

let slides = ['slide-pika.jpg', 'slide-enjoy.jpg', 'slide-magicarp.jpg'];
let position = 0;

WRAPPER.innerHTML = "<img src='images/" + slides[position] + "' alt='pika' />";

LEFT_ARROW.addEventListener('click', function() {
    changePosition('left');
});

RIGHT_ARROW.addEventListener('click', function() {
    changePosition('right');
});

function changePosition(direction) {
    if (direction === 'right') {
        if (position === slides.length - 1) {
            position = 0
        } else {
            ++position
        }
    } else if (direction === 'left') {
        if (position === 0) {
            position = slides.length - 1
        } else {
            --position
        }
    } else {
        return;
    }

    WRAPPER.innerHTML = "<img src='images/" + slides[position] + "' alt='pika' />";
}
