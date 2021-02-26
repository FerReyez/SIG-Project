import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionesProdComponent } from './devoluciones-prod.component';

describe('DevolucionesProdComponent', () => {
  let component: DevolucionesProdComponent;
  let fixture: ComponentFixture<DevolucionesProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolucionesProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucionesProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
