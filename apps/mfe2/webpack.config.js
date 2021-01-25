const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: 'mfe2',
    chunkFilename: '[name]-[contenthash].js',
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe2',
      filename: 'remoteEntry.js',
      exposes: {
        './Analyze': './apps/mfe2/src/app/analyze/analyze.component.ts',
        './Enrich': './apps/mfe2/src/app/enrich/enrich.component.ts',
        './Module': './apps/mfe2/src/app/bookings/bookings.module.ts',
      },

      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },

        // ...sharedMappings.getDescriptors(),
      },
    }),
    // sharedMappings.getPlugin(),
  ],
};
