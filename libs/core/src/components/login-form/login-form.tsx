import { Component, Event, EventEmitter, h, State } from '@stencil/core';
import { LoginData } from './login-form-data';

@Component({
  tag: 'login-form',
  styleUrl: 'login-form.css',
  shadow: true,
})
export class LoginForm {

  @Event() loginDataEvent: EventEmitter<LoginData>;

  @State()
  email: string;

  @State()
  password: string;

  handleSubmit(event) {
    event.preventDefault();
    this.loginDataEvent.emit({email: this.email, password: this.password});
  }

  handleMailChange(event) {
    this.email = event.target.value;

    if (event.target.validity.typeMismatch) {
      console.error('this element is not valid')
    }
  }

  handlePasswordChange(event) {
    this.password = event.target.value;

    if (event.target.validity.typeMismatch) {
      console.error('this element is not valid')
    }
  }

  addUserData() {
    this.email = 'user@nxext.dev';
    this.password = 'nxext';
  }

  addAdminData() {
    this.email = 'admin@nxext.dev';
    this.password = 'nxext';
  }

  render() {
    return <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <nxext-logo />
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" action="#" method="POST" onSubmit={(event) => this.handleSubmit(event)}>
            <div class="flex">
              <button class="flex-1" onClick={() => this.addUserData()}>
                <span class="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-500">
                  <span class="text-l font-medium leading-none text-white">User</span>
                </span>
              </button>
              <button class="flex-1" onClick={() => this.addAdminData()}>
                <span class="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-500">
                  <span class="text-l font-medium leading-none text-white">Admin</span>
                </span>
              </button>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div class="mt-1">
                <input id="email" value={this.email} onInput={(event) => this.handleMailChange(event)} name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div class="mt-1">
                <input id="password" value={this.password} onInput={(event) => this.handlePasswordChange(event)} name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
  }
}
