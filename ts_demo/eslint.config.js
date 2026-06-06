import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    plugins: {
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
    },

    ignores: ["dist/**", "build/**", "coverage/**", "node_modules/**", ".next/**"],

    rules: {
      /**
       * TypeScript
       */
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/no-explicit-any": "off",

      /**
       * Import
       */
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "import/first": "error",
      "import/newline-after-import": "error",

      /**
       * General
       */
      "no-console": "off",

      eqeqeq: ["error", "always"],

      curly: ["error", "all"],
    },
  },
];
