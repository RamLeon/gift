import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGifsComponent } from './sidebar-gifs.component';

describe('SidebarGifsComponent', () => {
  let component: SidebarGifsComponent;
  let fixture: ComponentFixture<SidebarGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarGifsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
