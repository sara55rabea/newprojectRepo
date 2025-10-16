import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent} from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PhoneComponent} from './phone/phone.component';
import { EmailComponent } from './email/email.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import path from 'path';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
export const routes: Routes = [
   {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
   {path:'home',component:HomeComponent},
   {path:'about',component:AboutComponent },
   {path:'contact',component:ContactComponent},
   {path:'phone',component:PhoneComponent},
   {path:'email',component:EmailComponent},
   {path:'address',component:AddressComponent},
   {path:'user',component:UserComponent},
   {path:'**',component:NotfoundComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],  // Ensure Angular router knows base path
    exports: [RouterModule]
  })
  export class AppRoutingModule {}