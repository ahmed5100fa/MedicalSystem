import { Component } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 2000,
      });
    }
  }
}
