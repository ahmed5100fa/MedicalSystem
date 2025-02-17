import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReSearchComponent } from './re-search.component';

describe('ReSearchComponent', () => {
  let component: ReSearchComponent;
  let fixture: ComponentFixture<ReSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
