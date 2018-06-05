module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "linebreak-style": ["error", "windows"],
        "indent": 0,
        "react/jsx-indent": 0,
        "no-tabs": 0,
        "react/forbid-prop-types": ["error", { "forbid": ["any", "array", "object"] }]
    }
};