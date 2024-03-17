import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormComponent } from './components/form/form.component';

const routes:any = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component:HomepageComponent },
  {path: 'form', component:FormComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

