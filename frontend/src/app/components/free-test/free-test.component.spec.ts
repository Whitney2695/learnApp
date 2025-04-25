import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTestComponent } from './free-test.component';

describe('FreeTestComponent', () => {
  let component: FreeTestComponent;
  let fixture: ComponentFixture<FreeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
