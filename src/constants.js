/**
 * @file constants.js
 * Central de Constantes da Landing Page - Blessed Control | Blessed Academy Jiu-Jitsu
 * 
 * Este arquivo unifica e centraliza links externos (Google Drive, APK),
 * metadados do aplicativo, informações institucionais da academia e utilitários
 * para evitar repetição de strings e facilitar manutenção futura.
 */

// links apk
/**
 * ID do arquivo instalador do APK hospedado no Google Drive.
 * Ao atualizar o APK no Google Drive, basta alterar este ID aqui.
 */
const GOOGLE_DRIVE_FILE_ID = "1CoO5t06XsM85kXzjgzC8X0CQ7b_NOQ1t";

/**
 * URL de visualização / compartilhamento padrão do Google Drive
 */
const GOOGLE_DRIVE_SHARE_URL = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/view?usp=drive_link`;

/**
 * URL direta de download imediato via Google Drive
 */
const GOOGLE_DRIVE_DIRECT_URL = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;

/**
 * Converte um link de visualização/compartilhamento do Google Drive no formato de download direto.
 * Se a URL informada não for um link do Google Drive, retorna a própria URL inalterada.
 * 
 * @param {string} url - URL para conversão
 * @returns {string} URL direta para download
 */
function getDirectDownloadUrl(url) {
  if (!url) return "";
  const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`;
  }
  return url;
}

/**
 * URL padrão e oficial de download utilizada em todos os botões e CTAs da landing page.
 */
const APK_DOWNLOAD_URL = GOOGLE_DRIVE_DIRECT_URL;

// dados do aplicativo 
const APP_NAME = "Blessed Control";
const APP_VERSION = "v1.2.0";
const APP_BUILD = "Build 2026.1 | Blessed OS";
const APK_FILE_NAME = "app-blessed-control-v1.apk";
const APK_SIZE = "~54.6 MB";
const ANDROID_MIN_VERSION = "Android 8.0 ou superior";

// informações institucionais da academia
const ACADEMY_NAME = "Blessed Academy Jiu-Jitsu";
const HEAD_COACH = "Prof. Everton Rodrigues";
const LOCATION = "Blessed Academy HQ • Serra Talhada, PE";
const LOGO_PATH = "media/screens/logo.webp";

const SITE_TITLE = `${APP_NAME} | ${ACADEMY_NAME}`;
const SITE_DESCRIPTION =
  "Check-in rápido no tatame, acompanhamento de graduação e graus em tempo real, diário de técnicas e gestão completa para professores e atletas de alta performance.";

const constants = {
  // Drive e download
  GOOGLE_DRIVE_FILE_ID,
  GOOGLE_DRIVE_SHARE_URL,
  GOOGLE_DRIVE_DIRECT_URL,
  APK_DOWNLOAD_URL,
  getDirectDownloadUrl,

  // App metadata (atualizar a cada nova versão)
  APP_NAME,
  APP_VERSION,
  APP_BUILD,
  APK_FILE_NAME,
  APK_SIZE,
  ANDROID_MIN_VERSION,

  // Institucional e meta
  ACADEMY_NAME,
  HEAD_COACH,
  LOCATION,
  LOGO_PATH,
  SITE_TITLE,
  SITE_DESCRIPTION,
};

module.exports = constants;
