import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { TopBarComponent } from '../../shared/top-bar/top-bar.component';

@Component({
  selector: 'app-sass-tech',
  standalone: true,
  imports: [RouterOutlet,
    TopBarComponent,
    HeaderComponent,
  ],
  templateUrl: './sass-tech.component.html',
  styleUrl: './sass-tech.component.css'
})
export class SassTechComponent {

}
