const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  '@myorg/auth-lib',
]);

module.exports = {
  output: {
    uniqueName: 'shell',
    chunkFilename: '[name]-[contenthash].js',
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        mfe1: 'mfe1@http://localhost:3000/remoteEntry.js',
      },

      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
        '@tabris84/auth-lib': { singleton: true, strictVersion: true },

        // ...sharedMappings.getDescriptors(),
      },
    }),
    // sharedMappings.getPlugin(),
  ],
};
