import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionCardComponent } from './evolution-card.component';

describe('EvolutionCardComponent', () => {
  let component: EvolutionCardComponent;
  let fixture: ComponentFixture<EvolutionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvolutionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolutionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
