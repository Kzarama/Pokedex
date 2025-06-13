import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { HEADER_TITLE } from 'features/pokedex/domain/constants/constants';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  headerTitle = HEADER_TITLE;
}
