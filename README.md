## React + Vite + TailwindCSS template

Create your own project based on this template by running:

```bash
npx degit quavedev/react-vite-tailwindcss-template your-project
```

## Install

```bash
npm install
```

> You can make sure you are running Node.js 22 with `nvm`. Run `nvm use` to set the Node.js 22 in this project.

## Develop

```bash
npm run dev
```

## Build

```bash
npm build
```

Preview:

```bash
npm run preview
```

## Deploy on Quave Cloud

Create your account at [quave.cloud](https://quave.cloud).

Connect to your GitHub, create your app and done!

Push to Deploy.

Or use the preconfigured [action](./.github/workflows/deploy.yaml) to deploy your app. Uncomment all the lines and add your Quave Cloud User Token (QUAVE_CLOUD_USER_TOKEN) to your secrets on GitHub and replace `env` placeholder value with your app env name (check it on app.quave.cloud > Your app env > Settings).
