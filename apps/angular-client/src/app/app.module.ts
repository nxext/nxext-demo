import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoreAngularModule } from '@nxext-demo/core-angular';
import { AuthHeaderInterceptor } from './auth-header.interceptor';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { IsLoggedinGuard } from './is-loggedin.guard';
import { HomeComponent } from './home/home.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-list', component: UserListComponent, canActivate: [IsLoggedinGuard] }
];


@NgModule({
  declarations: [AppComponent, UserListComponent, LoginComponent, HomeComponent, PageLayoutComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    FormsModule,
    CoreAngularModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
