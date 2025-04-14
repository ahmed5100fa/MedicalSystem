import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/additions/navbar/navbar.component";
import { FooterComponent } from "./layout/additions/footer/footer.component";
import { HomeComponent } from "./layout/pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MedicalSystem';

  darkMode:boolean=false 

  toggleDarkmode(){
    this.darkMode = !this.darkMode 

    if(this.darkMode){
      document.body.classList.add('dark-mode')
    }else{
      document.body.classList.remove('dark-mode')

    }
  }
}
