# Guide pour Débutant : Créer Votre Premier Site Web

Ce guide vous expliquera les bases de la création d'un site web. Nous allons couvrir les trois technologies fondamentales : HTML, CSS et JavaScript.

---

## 1. Introduction : Qu'est-ce qu'un site web ?

Un site web est un ensemble de pages web accessibles via internet. Pour commencer, il est utile de connaître la différence entre un site **statique** et un site **dynamique**.

*   **Site Statique :** C'est le type de site le plus simple. Son contenu ne change pas, sauf si le développeur modifie manuellement les fichiers. C'est parfait pour les portfolios, les CV en ligne ou les sites de présentation simples.
*   **Site Dynamique :** Son contenu peut changer automatiquement en fonction de l'utilisateur, de l'heure ou d'autres facteurs. Pensez aux réseaux sociaux, aux sites d'e-commerce, etc. Ils nécessitent des technologies plus avancées (côté serveur, bases de données).

**Pour ce guide, nous allons nous concentrer sur la création d'un site web statique.**

---

## 2. Les Technologies de Base

Trois langages sont essentiels pour créer un site web :

1.  **HTML (HyperText Markup Language) :** C'est le **squelette** de votre page. Il est utilisé pour structurer le contenu (titres, paragraphes, images, liens, etc.).
2.  **CSS (Cascading Style Sheets) :** C'est le langage de la **présentation**. Il est utilisé pour mettre en forme le contenu HTML (couleurs, polices, mise en page, etc.).
3.  **JavaScript (JS) :** C'est le langage de l'**interactivité**. Il permet de rendre votre site dynamique et de réagir aux actions de l'utilisateur (clics, soumission de formulaires, etc.).

---

## 3. HTML : La Structure de Votre Page

Le HTML utilise des **balises** (tags) pour définir les différents types de contenu.

### Fichier de base : `index.html`

Créez un fichier nommé `index.html` et copiez-y ce code de base :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Premier Site Web</title>
    <link rel="stylesheet" href="style.css"> <!-- Lien vers le fichier CSS -->
</head>
<body>
    <h1>Bonjour le Monde !</h1>
    <p>Ceci est mon premier site web.</p>
    <img src="url_de_votre_image.jpg" alt="Description de l'image">
    <a href="https://www.google.com">Aller sur Google</a>

    <script src="script.js"></script> <!-- Lien vers le fichier JavaScript -->
</body>
</html>
```

### Balises courantes :

*   `<!DOCTYPE html>` : Définit le type de document.
*   `<html>` : La racine de la page.
*   `<head>` : Contient les méta-informations (titre, encodage, liens vers les fichiers CSS).
*   `<body>` : Contient tout le contenu visible de la page.
*   `<h1>`, `<h2>`, ... : Titres (du plus important au moins important).
*   `<p>` : Un paragraphe.
*   `<a>` : Un lien hypertexte (attribut `href` pour l'URL).
*   `<img>` : Une image (attribut `src` pour le chemin de l'image).

---

## 4. CSS : Le Style de Votre Page

Le CSS vous permet de rendre votre site attrayant.

### Fichier de base : `style.css`

Créez un fichier `style.css` dans le même dossier que votre `index.html`.

```css
/* Ceci est un commentaire en CSS */

body {
    font-family: Arial, sans-serif; /* Police de caractères pour tout le corps de la page */
    background-color: #f0f0f0; /* Couleur de fond grise claire */
}

h1 {
    color: #333; /* Couleur de texte gris foncé */
    text-align: center; /* Centrer le texte */
}

p {
    color: #555; /* Couleur de texte un peu plus claire */
    font-size: 16px; /* Taille de la police */
}
```

### Comment ça marche ?

*   **Sélecteur (`body`, `h1`, `p`) :** Cible l'élément HTML que vous voulez styler.
*   **Propriété (`color`, `font-size`) :** Ce que vous voulez changer.
*   **Valeur (`#333`, `16px`) :** La nouvelle valeur de la propriété.

N'oubliez pas de lier ce fichier dans la balise `<head>` de votre `index.html` comme montré précédemment.

---

## 5. JavaScript : L'Interactivité

Le JavaScript donne vie à votre page.

### Fichier de base : `script.js`

Créez un fichier `script.js`.

```javascript
// Ceci est un commentaire en JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Ce code s'exécute une fois que toute la page est chargée

    const titre = document.querySelector('h1');

    // Change le texte du titre au clic
    titre.addEventListener('click', function() {
        titre.textContent = 'Vous avez cliqué !';
    });

    // Affiche une alerte au chargement de la page
    alert('Bienvenue sur mon site !');
});
```

### Comment ça marche ?

1.  On attend que la page soit complètement chargée (`DOMContentLoaded`).
2.  On sélectionne l'élément `<h1>`.
3.  On ajoute un "écouteur d'événement" qui attend un clic sur le titre.
4.  Quand le clic se produit, on exécute une fonction qui change le texte du titre.

---

## 6. Mettre en Ligne Votre Site

Une fois que votre site fonctionne sur votre ordinateur, vous voudrez le rendre accessible à tous.

Des services comme **GitHub Pages**, **Netlify** ou **Vercel** vous permettent d'héberger gratuitement des sites statiques. La méthode la plus simple pour commencer est souvent GitHub Pages, qui peut publier un site directement depuis votre dépôt de code.

C'est la fin de notre guide de base. Le développement web est un vaste domaine, mais avec ces trois technologies, vous avez les clés en main pour construire des projets incroyables. Bonne continuation !
