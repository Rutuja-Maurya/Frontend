import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Otherchild1Component } from './otherchild1/otherchild1.component';
import { Otherchild2Component } from './otherchild2/otherchild2.component';
import { ParentListComponent } from './parent-list.component';

const routes: Routes = [
  {
  path:'',
  component:ParentListComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentListRoutingModule { }
