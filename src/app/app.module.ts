import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './auth/home/home.component';
import { NavigationComponent } from './auth/navigation/navigation.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service'
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth/auth.guard';
import { AuthinterceptorService } from './auth/authinterceptor.service';
import { AddComponent } from './products/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    LoginComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"products", loadChildren:"../app/products/products/products.module#ProductsModule"},
      {path:"add", component:AddComponent, canActivate:[AuthGuard]},
      {path:"home", component: HomeComponent, canActivate:[AuthGuard]},
      {path:"login", component: LoginComponent},
      {path:"", redirectTo: "login", pathMatch:"full"},
      {path:"**", redirectTo: "login"},
    ])
  ], //important format to declare a auth interceptor service
  providers: [AuthService, CookieService, AuthGuard, {
    provide:HTTP_INTERCEPTORS,
    useClass : AuthinterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
