"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEsLintrcJson = void 0;
class CreateEsLintrcJson {
    execute() {
        return `{
  "env": {
      "es6": true,
      "node": true,
      "jest": true
  },
  "extends": [
      "airbnb-base",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint",
      "eslint-plugin-import-helpers",
      "prettier"
  ],
  "rules": {
    "camelcase": "off",
    "prettier/prettier": "error",
    "import/no-unresolved": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]\\\\w*DTO$",
          "match": true
        }
      }
    ],
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "no-console": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "lines-between-class-members": "warn",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never"
      }
    ],
    // "import-helpers/order-imports": [
    //   "warn",
    //   {
    //     "newlinesBetween": "always",
    //     "groups": ["module", "/^@shared/", ["parent", "sibling", "index"]],
    //     "alphabetize": { "order": "asc", "ignoreCase": true }
    //   }
    // ],
    "import/no-extraneous-dependencies": [
      "error",
      { "devDependencies": ["**/*.spec.js"] }
    ]
  },
  "settings": {
      "import/resolver": {
          "typescript": {}
      }
  }
}`;
    }
}
exports.CreateEsLintrcJson = CreateEsLintrcJson;
