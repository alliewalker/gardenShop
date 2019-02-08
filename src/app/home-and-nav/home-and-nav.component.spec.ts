import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAndNavComponent } from './home-and-nav.component';

describe('HomeAndNavComponent', () => {
  let component: HomeAndNavComponent;
  let fixture: ComponentFixture<HomeAndNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAndNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAndNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
