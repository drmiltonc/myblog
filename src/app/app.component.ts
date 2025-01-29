import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    FooterComponent,
    MatCardModule,
    HeaderComponent, 
    MatButtonModule,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideAnimations()]
})
export class AppComponent {
  title = 'myapp';
}
