const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Asegúrate de que las extensiones de archivo de las fuentes de los iconos estén incluidas
defaultConfig.resolver.assetExts.push("cjs", "ttf");

module.exports = defaultConfig;
