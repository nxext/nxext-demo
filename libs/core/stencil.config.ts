import { Config } from '@stencil/core';
import tailwind from 'stencil-tailwind-plugin';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'core',
  taskQueue: 'async',
  plugins: [
    tailwind()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/core/dist'
    },
    angularOutputTarget({
      componentCorePackage: '@nxext-demo/core',
      directivesProxyFile:
        '../../../libs/core-angular/src/generated/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings
    })
  ]
};
