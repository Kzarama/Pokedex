import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersWrapperComponent } from './filters-wrapper.component';

describe('FiltersComponent', () => {
  let component: FiltersWrapperComponent;
  let fixture: ComponentFixture<FiltersWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
