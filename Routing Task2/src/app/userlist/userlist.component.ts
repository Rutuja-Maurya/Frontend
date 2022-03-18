import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  users: any[] = [
    {
     id: 1,
     name: 'Rutuja',
    },
    {
     id: 2,
     name: 'Shruti',
    },
    {
     id: 3,
     name: 'Aishwariya',
    },
    {
     id: 4,
     name: 'Shreyas',
    }
   ]

}

