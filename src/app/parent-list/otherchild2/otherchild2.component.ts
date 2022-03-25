import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-otherchild2',
  templateUrl: './otherchild2.component.html',
  styleUrls: ['./otherchild2.component.scss']
})
export class Otherchild2Component implements OnInit {

  otherchild2:any[]=[]
@Input() parentchild1!:string
  
constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    
    this.otherchild2.push(this.parentchild1);
    
    }

}
