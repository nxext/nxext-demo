import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginForm, NxextLogo, UserList } from '../generated/directives/proxies';

const DECLARATIONS = [
  LoginForm,
  NxextLogo,
  UserList
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CommonModule],
})
export class CoreAngularModule {}
