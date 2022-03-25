import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  @Output() public send=new EventEmitter<string>();  
  
  addtext(otherchild1:string){
    this.send.emit(otherchild1);
    console.log(otherchild1)
  }
  
    constructor() { }

  ngOnInit(): void {
  }

}
