import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'accessHeights';

  constructor() {
  }

  toggledropdown(event: Event) {
    const elem = event.target! as HTMLElement;
    elem.classList.toggle('infocus');

    setTimeout(() => { 
    elem.classList.remove('infocus');
    },
    4000)
  }

}
