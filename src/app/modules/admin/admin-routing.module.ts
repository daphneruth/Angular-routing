import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },

   
    
    ],
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    
  ],

  exports: [RouterModule]
})
export class AdminRoutingModule { }
