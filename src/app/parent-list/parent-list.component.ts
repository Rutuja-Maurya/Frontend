import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit {
  name1:boolean=false;
  name2:boolean=false;
  Item1="";
  Item2="";
  Item1List=""
  Item2List=""
  parentchild=""
  parentchild1=""
 
  constructor() { }

  ngOnInit(): void {
  }
  otherchild1(){
    this.name2=false

    this.name1=true
    
    }

 otherchild2(){
      this.name1=false
      this.name2=true
   }
send(Item1List:any)
{
  this.Item1=Item1List
  
  this.parentchild=this.Item1
}
send2(Item2List:any)
{
  this.Item2=Item2List
  console.log( this.Item2List)

  
  this.parentchild1=this.Item2
}
}
