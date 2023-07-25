import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    AdminDashboardComponent,
  
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule { }
