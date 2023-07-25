import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/admin/component/about/about.component';
import { AdminDashboardComponent } from './modules/admin/component/admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './modules/admin/component/contact/contact.component';
import { HomeComponent } from './modules/admin/component/home/home.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
