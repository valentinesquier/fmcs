# Onboarding — FMCS

Bienvenue sur le repo FMCS. Ce document est ta première escale : il te donne le contexte, le setup, et les règles de collaboration sur ce projet.

## 1. Le projet

**FMCS** (Fitmass Coaching School) est une plateforme Next.js liée à l'écosystème Fitmass. Le repo est **privé** — seules les personnes invitées par Valentin y ont accès.

- **Stack** : Next.js (App Router), React, TypeScript, TailwindCSS (à confirmer selon l'état du projet)
- **Environnement cible** : Node.js 20+
- **Déploiement** : (à confirmer — probablement Vercel)

## 2. Setup initial (une seule fois)

### Pré-requis à installer sur ta machine

1. **Git** — probablement déjà installé. Teste avec `git --version`. Sinon : [git-scm.com/download/mac](https://git-scm.com/download/mac)
2. **Node.js 20+** — [nodejs.org](https://nodejs.org) (télécharger la version LTS)
3. **GitHub CLI** (optionnel mais recommandé) :
   ```bash
   brew install gh
   gh auth login
   ```

### Cloner le repo

```bash
# Option A : via GitHub CLI (plus simple)
gh repo clone valentinesquier/fmcs

# Option B : via Git classique
git clone https://github.com/valentinesquier/fmcs.git

cd fmcs
npm install
npm run dev
```

Le serveur dev tourne sur `http://localhost:3000`.

### Configurer ton identité Git

Avant ton premier commit, configure ton nom et email (ceux que tu veux voir apparaître dans l'historique) :

```bash
git config --global user.name "Mathis [Nom]"
git config --global user.email "ton@email.com"
```

## 3. Workflow Git — les règles d'or

Ce projet suit le modèle **feature branch + pull request**. Aucun push direct sur `main`.

### À chaque nouvelle tâche

```bash
# 1. Se mettre à jour
git checkout main
git pull

# 2. Créer une branche avec un nom clair
git checkout -b mathis/nom-de-la-feature
# Exemples : mathis/auth-page, mathis/fix-navbar-color, mathis/add-pricing-section

# 3. Bosser, commiter au fil de l'eau
git add .
git commit -m "Message clair (verbe à l'infinitif)"

# 4. Quand c'est prêt à review, push la branche
git push -u origin mathis/nom-de-la-feature
```

### Pull request (review avant merge sur main)

1. Va sur [github.com/valentinesquier/fmcs](https://github.com/valentinesquier/fmcs)
2. Clique sur **"Compare & pull request"** (apparaît après ton push)
3. Décris ce que fait ta branche, ajoute des screenshots si c'est visuel
4. Assigne Valentin comme reviewer
5. Après approbation, Valentin merge sur `main`

### Règles

- ✅ **Un commit = une idée claire** (pas de `wip` ou `fix`)
- ✅ **Messages de commit à l'impératif** (`Add login form`, `Fix layout mobile`)
- ✅ **Toujours `git pull` avant de commencer** une nouvelle session de travail
- ❌ **Jamais de `git push --force` sur main** (tu effaces l'historique)
- ❌ **Jamais de commit avec `.env`, clés API, tokens** (utilise `.gitignore`)
- ❌ **Pas de push direct sur `main`** — tout passe par PR

## 4. Conventions de code

*(À compléter selon l'état du projet — prettier, eslint, conventions de naming, structure des dossiers)*

## 5. Variables d'environnement

Il te faudra un fichier `.env.local` à la racine avec les clés nécessaires. Valentin te les fournit via **un canal sécurisé** (pas Slack public, pas email clair — préférer 1Password, LastPass ou signal).

Ne **jamais** commiter `.env.local`. Le `.gitignore` du projet doit déjà l'exclure — vérifie avant ton premier push.

## 6. Contacts

- **Valentin** (owner, produit, design) — [valentin.esquier@esq.group](mailto:valentin.esquier@esq.group)
- Pour toute question bloquante : lui écrire direct
- Pour les discussions async : (à définir — Slack, Notion, GitHub Issues)

## 7. Accès à fournir par Valentin après ton arrivée

- [ ] Invitation collaborateur sur le repo GitHub `valentinesquier/fmcs`
- [ ] Accès Vercel (si tu dois déployer)
- [ ] Fichier `.env.local` avec les clés API
- [ ] Accès à la doc produit (Notion ou autre)
- [ ] Accès aux maquettes Figma (si applicable)

---

**Bienvenue dans l'équipe !**
