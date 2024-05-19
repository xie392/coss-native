const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer.minifierPath = require.resolve("metro-minify-esbuild");
config.transformer.minifierConfig = {
  // ESBuild options...
};

module.exports = config;
