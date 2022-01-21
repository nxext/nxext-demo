import { Component, h } from '@stencil/core';

@Component({
  tag: 'user-home'
})
export class UserHome {

  render() {
    return <div class='relative py-16 bg-white overflow-hidden'>
      <div class='relative px-4 sm:px-6 lg:px-8'>
        <div class='text-lg max-w-prose mx-auto'>
          <h1>
            <span
              class='block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase'>A small example</span>
            <span
              class='mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Nxext Demo</span>
          </h1>
          <p class='mt-8 text-xl text-gray-500 leading-8'>
            This is a simple demo application using Angular and Stencil.

            Angular uses the Stencil generated components to render this.
          </p>
          <p class='mt-8 text-xl text-gray-500 leading-8'>
            <b>(Be aware that for all other pages you need to start the backend and docker-compose database)</b>
          </p>
        </div>
      </div>
    </div>;
  }
}
