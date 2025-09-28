function loadMarkdown(url, containerId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.text();
        })
        .then(markdown => {
            document.getElementById(containerId).innerHTML = marked.parse(markdown);
        })
        .catch(error => {
            console.error('Erreur :', error);
            document.getElementById(containerId).innerHTML =
                `<p style="color: red;">Erreur de chargement du fichier : ${error.message}</p>`;
        });
}

// URL brute du README.md sur GitHub
// ATTENTION : L'URL ci-dessous contient un token d'accès temporaire car le dépôt est privé.
// Le chargement échouera lorsque le token expirera.
// Pour une solution durable, rendez le dépôt public ou utilisez l'API GitHub.
const readmeUrl = 'https://raw.githubusercontent.com/Aminehammou/TestComposants_Encoder/refs/heads/main/README.md?token=GHSAT0AAAAAADGTTSZJGW7CURISINKP44SM2GZRE4A';
loadMarkdown(readmeUrl, 'markdown-container');
