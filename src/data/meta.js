function getDirectDownloadUrl(url) {
  const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`;
  }
  return url;
}

const meta = {
  title: "Blessed Control | Blessed Academy Jiu-Jitsu",
  description:
    "Check-in rápido no tatame, acompanhamento de graduação e graus em tempo real, diário de técnicas e gestão completa para professores e atletas de alta performance.",
  version: "v1.2.0",
  build: "Build 2026.1 | Blessed OS",
  apkSize: "~54.6 MB",
  androidVersion: "Android 8.0 ou superior",
  apkDownloadUrl: getDirectDownloadUrl(
    "https://drive.google.com/file/d/1CoO5t06XsM85kXzjgzC8X0CQ7b_NOQ1t/view?usp=drive_link"
  ),
  apkFileName: "app-blessed-control-v1.apk",
  logo: "media/screens/logo.webp",
  headCoach: "Prof. Everton Rodrigues",
  location: "Blessed Academy HQ • Serra Talhada, PE",
};

module.exports = meta;
