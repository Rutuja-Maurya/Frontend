import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {
    path:" ",
    component: UserlistComponent

  },
  {
    path:"userlist",
    component: UserlistComponent

  },
  {
    path:"edit/:id",
    component: EditComponent

  },
  {
    path:"details/:id",
    component: DetailsComponent

  },
  {
    path:"**",
    component: PagenotfoundComponent

  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
