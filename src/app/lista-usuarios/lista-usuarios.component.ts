import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../models/user';
import { UsuariosService } from '../service/usuarios/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  usersList: User[];
  collection = { count:10, data:[]};
  constructor(public userService: UsuariosService, private router: Router) { }
 
  ngOnInit(): void {
    this.populateUsers();
  }


  populateUsers(){
    for (let i = 0; i < this.collection.count; i++) {
      this.collection.data.push({ 
        name: 'nome' + i,
        email: 'email' + i + '@gmail.com',
        password: 'password' + i,
        admin: true 

      });
    }
    this.usersList = this.collection.data;
  }
  editUsuarios(usuarios: User){
    console.log('edit esta funcinado', usuarios);
    this.userService.getUsuariosList(usuarios);
    this.router.navigate(['/cadastro-usuarios']);

  }

  deleteUsuarios(user: User){
    Swal.fire({
      title: 'Você tem certeza?',
      text:'Deseja mesmo deletar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => { 
      if (result.isConfirmed) {
        Swal.fire(
          'Deletando com sucesso',
          );
       }
    });
  }
}
