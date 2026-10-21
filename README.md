
# SNEHA PRO

**Professional Audio Engineering & Sound Solutions**

SNEHA PRO provides professional audio solutions for live concerts, events, and audio production environments. This website showcases our services, equipment, projects, and contact information through a futuristic, dark, and responsive design.

## ✨ Features

- Futuristic dark theme with red neon accents
- Responsive, mobile-first design
- Liquid-glass inspired visual elements
- Professional audio equipment showcase
- Live concert sound project gallery
- Video highlights for selected projects
- Interactive media viewer
- Mobile navigation menu
- Social media links
- Contact section
- GitHub Pages deployment support

## 🛠️ Built With

- React
- Vite
- JavaScript
- CSS
- HTML5
- Git and GitHub Pages

## 📁 Project Structure

```text
sneha-pro/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── 1stconsole.png
│   │   ├── console.png
│   │   ├── concert.png
│   │   ├── corporate.png
│   │   └── equipments.png
│   └── highlights/
│       ├── concert/
│       ├── corporate/
│       └── equipment/
├── src/
│   ├── components/
│   │   └── Logo.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*Note: The structure above describes the expected asset locations. Actual filenames and folders may vary.*

## 🚀 Getting Started

### Prerequisites

Install the following on your system:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/sneha-pro.git
```

Replace `YOUR-GITHUB-USERNAME` with your GitHub username.

### 2. Open the project

```bash
cd sneha-pro
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

The generated production files will be stored in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deploy to GitHub Pages

Make sure the repository and `vite.config.js` are configured for GitHub Pages.

For a repository named `sneha-pro`, the Vite base path usually needs to be:

```js
base: '/sneha-pro/',
```

Then deploy using the configured npm script:

```bash
npm run deploy
```

Alternatively, push your changes to GitHub if your repository already uses an automatic deployment workflow.

After deployment, the website URL will usually be:

```text
https://YOUR-GITHUB-USERNAME.github.io/sneha-pro/
```

Replace the placeholder with your actual GitHub username. Confirm the published URL under **GitHub → Repository → Settings → Pages**.

## 🔄 Update the Website

After editing the source code, save your changes and run:

```bash
npm run build
```

Commit and push your updates:

```bash
git add .
git commit -m "Update SNEHA PRO website"
git push origin main
```

If GitHub Pages deploys automatically, wait for the workflow to finish. Otherwise, use your configured deployment command.

## 🖼️ Assets and Media

Place website images in `public/images/` and project video highlights in the appropriate folders under `public/highlights/`.

Use paths relative to the public directory in your React code. For example:

```jsx
<img src="/images/logo.png" alt="SNEHA PRO" />
```

For GitHub Pages deployments under a repository subpath, ensure asset URLs account for the configured Vite base path where necessary.

## 🎧 Services

The website may showcase services such as:

- Live Sound & PA Systems
- Live Audio Mixing
- System Tuning & Calibration
- Stage Monitors & IEMs
- Wireless Microphones & Coordination
- Audio Equipment Rental

## 📄 License

All rights to the SNEHA PRO brand, logo, and original media belong to their respective owners. No general open-source license is granted unless one is explicitly added to this repository.

## 🤝 Contributions

This repository is maintained for the SNEHA PRO website. For changes, updates, or collaboration, contact the project owner.

---

**SNEHA PRO — Professional Sound. Powerful Experiences.**
