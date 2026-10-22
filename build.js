const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const ejs = require("ejs");
const siteData = require("./src/data");

const publicCssDir = path.join(__dirname, "public", "css");
fs.mkdirSync(publicCssDir, { recursive: true });

console.log("🎨 Compilando e minificando CSS com Tailwind CLI...");
execSync(
  "npx tailwindcss -i ./src/css/input.css -o ./public/css/styles.css --minify",
  { stdio: "inherit" }
);

const compiledCss = fs.readFileSync(
  path.join(publicCssDir, "styles.css"),
  "utf8"
);

const templatePath = path.join(__dirname, "views", "index.ejs");
const outputPath = path.join(__dirname, "index.html");

ejs.renderFile(
  templatePath,
  { ...siteData, compiledCss },
  {},
  (err, html) => {
    if (err) {
      console.error("Erro ao compilar o template EJS:", err);
      process.exit(1);
    }
    fs.writeFileSync(outputPath, html, "utf8");
    console.log(
      `✅ Arquivo estático index.html gerado com sucesso (CSS compilado: ${(
        Buffer.byteLength(compiledCss, "utf8") / 1024
      ).toFixed(1)} KB)!`
    );
  }
);
