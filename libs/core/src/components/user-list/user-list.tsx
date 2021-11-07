import { Component, h, Prop } from '@stencil/core';

export interface User {
  firstName: string;
  lastName: string;
  avatarUrl: string;
  role: string;
}

@Component({
  tag: 'user-list',
  styleUrl: 'user-list.css',
  shadow: true,
})
export class UserList {

  @Prop() users: User[];

  render() {
    if(!this.users || this.users.length === 0) {
      return (
        <div class="text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900">No users</h3>
          <p class="mt-1 text-sm text-gray-500">
            Get started by creating a new users.
          </p>
        </div>
      );
    } else {
      return <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
        {this.users.map(user => <li>
          <div class="flex items-center space-x-4 lg:space-x-6">
            <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={user.avatarUrl} alt="{user.firstName} {user.lastName}" />
            <div class="font-medium text-lg leading-6 space-y-1">
              <h3>{user.firstName} {user.lastName}</h3>
              <p class="text-indigo-600">{user.role}</p>
            </div>
          </div>
        </li>)}
      </ul>;
    }
  }
}
