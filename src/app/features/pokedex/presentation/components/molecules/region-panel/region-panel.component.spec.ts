import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionPanelComponent } from './region-panel.component';

describe('RegionPanelComponent', () => {
  let component: RegionPanelComponent;
  let fixture: ComponentFixture<RegionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
