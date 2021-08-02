import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuariosService } from '../service/usuarios/usuarios.service';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.scss']
})
export class FormUsuariosComponent implements OnInit {

  formUsuarios = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    admin: new FormControl('', [Validators.required, ])


  });

  constructor(private  router: Router, public usuariosService: UsuariosService) { }

  ngOnInit(): void {
  this.usuariosService.botaoEdit.subscribe(edit => {
    if(edit !== null){
      console.log(edit, 'valor do edit');
      this.formUsuarios.get('name').setValue(edit.name);
      this.formUsuarios.get('email').setValue(edit.email);
      this.formUsuarios.get('password').setValue(edit.password);
      this.formUsuarios.get('admin').setValue(edit.admin)
    }
  })
  }

  save(){
    if(this.formUsuarios.valid){
    Swal.fire({
      icon: 'success',
      title: 'Eeeba..',
      text:'Usuário criado com sucesso!'
    });
    this.router.navigate(['/lista-usuarios']);
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Ooooops',
      text: 'Cadastro não realizado'
    });
  }

  }


}
