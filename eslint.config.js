const js = require("@eslint/js");
const globals = require("globals");
const pluginImport = require("eslint-plugin-import");
const pluginJsxA11y = require("eslint-plugin-jsx-a11y");
const pluginNode = require("eslint-plugin-node");
const pluginPrettier = require("eslint-plugin-prettier");
const pluginReact = require("eslint-plugin-react");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      pluginImport,
      pluginJsxA11y,
      pluginNode,
      pluginPrettier,
      pluginReact,
    },
    rules: {
      "no-unused-vars": "error",
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
