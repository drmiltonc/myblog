import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  
  imports: [MatToolbarModule, MatButtonModule]
})
export class HeaderComponent {}