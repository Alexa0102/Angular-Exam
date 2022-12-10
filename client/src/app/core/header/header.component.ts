import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  get isLogged(): boolean{
    return this.authService.isLogged()
  }
  constructor(private authService: AuthService, private router: Router){}

  logout(){
    this.authService.logout()
    this.router.navigate(['/'])
  }
}