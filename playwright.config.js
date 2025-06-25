// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // <== uniquement ce dossier
  testMatch: '**/*.spec.{js,ts,jsx,tsx}', // facultatif si tous tes tests suivent ce pattern
});