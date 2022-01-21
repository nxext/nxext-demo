import { Component, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'nxext-logo',
  assetsDirs: ['assets'],
  shadow: true,
})
export class NxextLogo {
  render() {
    return <img class="object-contain h-8 w-full" src={getAssetPath('./assets/logo-dark.png')} />;
  }
}
