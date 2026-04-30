const path = require('path');
const { getDefaultConfig } = require('@react-native/metro-config');

const root = path.resolve(__dirname, '..');

const config = getDefaultConfig(__dirname);

config.watchFolders = [root];

config.resolver.extraNodeModules = new Proxy(
  {},
  {
    get: (target, name) => {
      if (name in target) return target[name];
      return path.join(__dirname, 'node_modules', name);
    },
  }
);

module.exports = config;
