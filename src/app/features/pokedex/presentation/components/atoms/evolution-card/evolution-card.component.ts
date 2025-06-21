import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-evolution-card',
  imports: [RouterModule],
  templateUrl: './evolution-card.component.html',
  styleUrl: './evolution-card.component.scss',
})
export class EvolutionCardComponent {
  @Input() pokemon = { id: '', uid: 0, name: '', avatar: '' };
}
