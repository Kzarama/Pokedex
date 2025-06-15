import { HEADER_TITLE } from '@/features/pokedex/domain/constants/constants';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearcherComponent } from '../../molecules/searcher/searcher.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, SearcherComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerTitle = HEADER_TITLE;
}
