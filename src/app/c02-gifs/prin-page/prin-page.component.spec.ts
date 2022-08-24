import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinPageComponent } from './prin-page.component';

describe('PrinPageComponent', () => {
  let component: PrinPageComponent;
  let fixture: ComponentFixture<PrinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
