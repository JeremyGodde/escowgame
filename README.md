# escowgame

## Installation

### NodeJs LTS

Il s'agit du serveur qui va compiler le code, heberger localement ton site pour faire des tests et gérer plein de trucs à ta place.

Télécharger NodeJs LTS sur https://nodejs.org/en/download/

Pour l'installation, tu ne dois pas oublier de demander l'installation de *Chocolatey* (un dézippeur). Sur certain OS cela est fait automatiquement. Autrement ne change à rien.

### Git

Git est l'outil permettant de récuperer le dépôt, de partager tes modifications au groupe et de récupérer les modifications du groupe.

Télécharger Git sur https://git-scm.com/downloads

### Récupérer le dépôt

Dans ton explorateur de fichier va dans le dossier où tu souhaites ajouter le dépôt.

Puis ouvre une console dans ce dossier (onglet Fichier de l'explorateur sous windows, puis soit Powershell, soit l'invite de commande CMD).

Ensuite écrire dans la console la commande :
```sh
git clone https://gitlab.utc.fr/goddejer/escowgame.git
```

Si la console te demande **un identifiant et un mot de passe**, il s'agit de ceux de l'UTC. Dans une console **un mot de passe se tape à l'aveugle, il n'y a pas de retour visuel des caractères tapés**.

Une fois que le clonage est terminé ferme la console.

### VS Code

Je conseille VS Code pour coder le projet et d'installer l'extension `JavaScript and TypeScript Nightly`. Pour ce faire, lance VS Code, utilise le raccourci `CTRL + SHIFT + X` puis recherche l'extension dans la barre de recherche des extensions. Tu peux ensuite fermer VS Code. Un redemarrage est peut-être requis mais nous allons rouvrir VS Code depuis le projet directement. Fais un clic droit sur le dossier du projet depuis ton explorateur de fichier et `Ouvrir avec VS Code`

### Comment lancer le projet ?

Ouvrir un terminal (onglet Terminal > New Terminal) où le raccourci `CTRL + ù`

**La première fois uniquement**, il te faudra installer les dépendances javascript. Pour cela taper la commande
```sh
npm install
```

Ensuite **à chaque fois** que tu veux lancer le projet pour faire des tests :
```sh
npm run dev
```

Si tu regardes le retour de la console, une URL t'es donnée. Tu peux la recopier dans ton navigateur internet.

**Pour arrêter** le test, il te suffit de faire un `CTRL + C` dans la console. Cela peut prendre quelques secondes. Toutefois **React support la compilation dynamique** c'est à dire que si tu as un test qui tourne, lorsque tu sauvegardes un fichier, le test se met à jour sans avoir besoin d'être relancé.

### Comment récuperer les modifications du dépôt ?

**Pour éviter les conflits qui devront être réglés manuellement** le mieux est de récuperer les modifications du dépôt avant d'en produire de nouvelles locales.

Pour récupérer les modifications il te suffit de taper la commande :

```sh
git pull
```

### Comment partager mes modifications locales au reste du dépôt ?

**Pour éviter les conflits qui devront être réglés manuellement** le mieux est de partager ses modifications locales au reste du dépôt à la fin de chaque session de travail. Cela se fait en trois étapes.

L'ajout des fichiers modifiés :

```sh
git add -A
```

Après avoir ajouté les fichiers modifiés tu crées un commit (correspond à une modificaiton au niveau de l'historique du dépôt) :

```sh
git commit -m "ici tu peux mettre une courte description de la modification"
# Exemple :
git commit -m "ajout dialogue salle 6"
```
Il est conseillé de faire des commits à chaque modification. Par exemple si tu veux ajouter un dialogue et commencer une nouvelle salle, fais un commit lorsque tu as ajouté le dialogue puis commence la nouvelle salle et fais un second commit quand tu as fini.

Le partage des nouveaux commits :
```sh
git push -F
```