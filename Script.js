// Variables
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');

// Fonction pour cacher la première page et afficher la deuxième
function goToSecondPage() {
    page1.style.display = 'none';
    page2.style.display = 'block';
}

// Fonction pour le mouvement aléatoire du bouton "No"
function randomMove(button) {
    const randomPositionX = Math.random() * window.innerWidth;
    const randomPositionY = Math.random() * window.innerHeight;
    button.style.position = 'absolute';
    button.style.left = `${randomPositionX}px`;
    button.style.top = `${randomPositionY}px`;
}

// Event listener pour le bouton "No"
noButton.addEventListener('click', () => {
    randomMove(noButton);
});

// Event listener pour le bouton "Yes"
yesButton.addEventListener('click', () => {
    goToSecondPage();
});