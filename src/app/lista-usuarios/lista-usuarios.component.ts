import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  usersList: User[];
  collection = { count:10, data:[]};
  constructor() { }
 
  ngOnInit(): void {
    this.populateUsers();
  }


  populateUsers(){
    for (let i = 0; i < this.collection.count; i++) {
      this.collection.data.push({ 
        name: 'nome' + i,
        email: 'username' + i,
        password: 'password' + i,
        admin: true 

      });
    }
    this.usersList = this.collection.data;
  }
}
