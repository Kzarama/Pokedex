const fs = require("fs");
const path = require("path");

const environmentProdPath = path.resolve(
  __dirname,
  "src/environments/environment.ts"
);

const content = `
export const environment = {
  firebase: {
    projectId: 'pokedex-app-kz',
    appId: '1:1008231510677:web:0d24c4c02fd915e005219c',
    storageBucket: 'pokedex-app-kz.firebasestorage.app',
    apiKey: 'AIzaSyAyx5KpuX3LIY5TMLcuzNGSmm5HUSy7L60',
    authDomain: 'pokedex-app-kz.firebaseapp.com',
    messagingSenderId: '1008231510677',
  },
};
`;

fs.writeFileSync(environmentProdPath, content.trim());
console.log("environment.prod.ts generated successfully!");
