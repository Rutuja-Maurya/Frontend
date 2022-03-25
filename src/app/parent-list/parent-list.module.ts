import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentListRoutingModule } from './parent-list-routing.module';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Otherchild1Component } from './otherchild1/otherchild1.component';
import { Otherchild2Component } from './otherchild2/otherchild2.component';
import { ParentListComponent } from './parent-list.component';


@NgModule({
  declarations: [
    ParentListComponent,
    Child1Component,
    Child2Component,
    Otherchild1Component,
    Otherchild2Component
  ],
  imports: [
    CommonModule,
    ParentListRoutingModule
  ]
})
export class ParentListModule { }
