import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div style="width: 100%;">
        <router-outlet></router-outlet>
    </div>
  `,
  styles: `
    :host {
        display: block;
        width: 100%;
        min-height: 100vh;
        height: 100%;
        overflow: hidden;    
    }
  `
})
export class MainLayoutComponent {
  
}