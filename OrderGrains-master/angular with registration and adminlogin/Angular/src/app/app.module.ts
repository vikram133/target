import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

// router link
import {RouterModule,Routes} from '@angular/router';
import { CustomerViewComponent } from './customer-view/customer-view.component'; 

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

//storge
import {NgxWebstorageModule} from 'ngx-webstorage';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const appRoutesConfig:Routes = [
  { path : 'admin-login', component : AdminLoginComponent},
  {path : 'admin-table',component : AdminTableComponent,
  children :[{path : '',component : AddProductComponent},
  {path : 'add-product',component : AddProductComponent}
]
  },
  //{path : '**',redirectTo : '', component : CustomerViewComponent}
  {path : 'customer-page',component : CustomerViewComponent},
  {path : '',component : CustomerViewComponent,
  // {path : 'customer-page',component : CustomerViewComponent,
  children : [{path :'register',component : RegisterComponent},
  {path : 'login',component : LoginComponent}]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    CustomerViewComponent,
    AdminTableComponent,
    AddProductComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutesConfig),FormsModule,HttpClientModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
