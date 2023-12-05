import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './content/Components/content-page/content-page.component';
import { HomePageComponent } from './home-user/components/home-page/home-page.component';

const routes: Routes = [
  {path: 'home', component: ContentPageComponent},
  {path: 'user-home', component: HomePageComponent},
  {path: '', component: ContentPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
