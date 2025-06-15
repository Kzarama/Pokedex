import { HEADER_TITLE } from '@/features/pokedex/domain/constants/constants';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerTitle = HEADER_TITLE;

  @ViewChild('myInputField') myInputField!: ElementRef<HTMLInputElement>;

  focusInput() {
    if (this.myInputField) {
      this.myInputField.nativeElement.focus();
    }
  }
}
