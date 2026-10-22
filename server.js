const fs = require("fs");
const path = require("path");
const express = require("express");
const siteData = require("./src/data");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
  "/media",
  express.static(path.join(__dirname, "media"), {
    maxAge: "7d",
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".apk")) {
        res.setHeader("Content-Type", "application/vnd.android.package-archive");
        res.setHeader(
          "Content-Disposition",
          `attachment; filename="${path.basename(filePath)}"`
        );
      }
    }
  })
);
app.use(express.static(path.join(__dirname, "public"), { maxAge: "1d" }));

app.get("/", (req, res) => {
  const cssPath = path.join(__dirname, "public", "css", "styles.css");
  const compiledCss = fs.existsSync(cssPath)
    ? fs.readFileSync(cssPath, "utf8")
    : "";
  res.render("index", { ...siteData, compiledCss });
});

app.listen(PORT, () => {
  console.log(`🥋 Blessed Control Landing Page rodando em http://localhost:${PORT}`);
});
