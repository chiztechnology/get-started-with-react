module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended'
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],

    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    }

}
