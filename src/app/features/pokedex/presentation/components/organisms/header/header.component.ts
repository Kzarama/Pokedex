import { HEADER_TITLE } from '@/features/pokedex/domain/constants/constants';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../atoms/button/button.component';
import { SearcherComponent } from '../../molecules/searcher/searcher.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, SearcherComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerTitle = HEADER_TITLE;
  router = inject(Router);

  handleClick(route: string) {
    if (this.router.url === route) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate([route]);
    }
  }
}
