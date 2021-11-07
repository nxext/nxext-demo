import { Config } from '@stencil/core';
import tailwind, { PluginOpts } from 'stencil-tailwind-plugin';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

import { reactOutputTarget } from '@stencil/react-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'core',
  taskQueue: 'async',
  plugins: [tailwind(Object.assign(
    PluginOpts.DEFAULT,
    { debug: false, stripComments: true }
  ))],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/core/dist',
    },
    angularOutputTarget({
      componentCorePackage: '@nxext-demo/core',
      directivesProxyFile:
        '../../../libs/core-angular/src/generated/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      componentCorePackage: '@nxext-demo/core',
      proxiesFile: '../../../libs/core-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
};
