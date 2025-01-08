// Tableau de citations freudiennes
const freudQuotes = [
    "L'homme n'est pas maître dans sa propre maison.",
    "Les rêves sont la voie royale vers l'inconscient.",
    "Le bonheur est un rêve d'enfant réalisé dans l'âge adulte.",
    "La voix de l'intellect est douce, mais elle ne repose pas tant qu'elle n'est pas écoutée.",
    "Nous sommes façonnés par nos désirs inconscients.",
    "Le moi n'est pas maître de lui-même.",
    "La liberté individuelle n'est pas un bien de la civilisation.",
];

// Fonction pour afficher une citation aléatoire
function displayFreudQuote() {
    const randomIndex = Math.floor(Math.random() * freudQuotes.length);
    document.getElementById("quoteDisplay").innerText = freudQuotes[randomIndex];
}