import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=>import('./modules/auth/auth.module').then( mod => mod.AuthModule)
  }
  ,{
    path: '',
    loadChildren: ()=>import('./modules/home/home.module').then( mod => mod.HomeModule),
    component: HomePageComponent
  },
  {
    path:'**',
    redirectTo:'/tracks'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
