import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.putEvenetsMenu();
  }

  /*ngOnDestroy(): void {
    this.refresh();
  }*/

  putEvenetsMenu(){
    const menuDesktop = document.getElementById('menu-desktop');
    const menuMobile = document.getElementById('menu-mobile');
    menuMobile.addEventListener('click', function(){
      menuDesktop.classList.toggle('active'); 
    });
  }

  /*refresh(){
    window.location.reload()
  }*/

  logout(){
    localStorage.removeItem('admin');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.router.navigate(['/login']);
  }
}
