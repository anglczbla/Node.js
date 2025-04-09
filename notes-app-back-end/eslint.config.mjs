import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import daStyle from 'eslint-config-dicodingacademy';


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  daStyle,
]);