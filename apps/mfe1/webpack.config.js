const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  // '@myorg/auth-lib',
  '@myorg/route-lib',
]);

module.exports = {
  output: {
    uniqueName: 'mfe1',
    chunkFilename: '[name]-[contenthash].js',
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe1',
      filename: 'remoteEntry.js',
      exposes: {
        './FlightsModule': './apps/mfe1/src/app/flights/flights.module.ts',
        './Download': './apps/mfe1/src/app/download/download.component.ts',
        './Upload': './apps/mfe1/src/app/upload/upload.component.ts',
      },

      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
        '@tabris84/auth-lib': { singleton: true, strictVersion: true },

        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
