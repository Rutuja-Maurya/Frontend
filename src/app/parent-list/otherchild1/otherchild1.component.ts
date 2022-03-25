import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-otherchild1',
  templateUrl: './otherchild1.component.html',
  styleUrls: ['./otherchild1.component.scss']
})
export class Otherchild1Component implements OnInit {

otherchild1:any[]=[]
@Input() parentchild!:string
  
constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.otherchild1.push(this.parentchild);
    }

}
