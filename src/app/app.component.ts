import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmiComponent } from './emi/emi.component';
import { EmiiComponent } from './emii/emii.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmiComponent, EmiiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emi_calculator';
}
