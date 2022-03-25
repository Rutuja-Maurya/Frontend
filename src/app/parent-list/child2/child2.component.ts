import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  @Output() public send2=new EventEmitter<string>();
 
  addfoodmenu2(otherchild2:string){
    
    this.send2.emit(otherchild2);
    console.log(otherchild2)
  }
 
 
 
  constructor() { }

  ngOnInit(): void {
  }

}
