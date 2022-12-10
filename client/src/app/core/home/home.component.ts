import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  get isLogged() {
    if (this.authService.user) {
      return true
    } else {
      return false
    }
  }
  constructor(private authService: AuthService) { 
   
  }
}
