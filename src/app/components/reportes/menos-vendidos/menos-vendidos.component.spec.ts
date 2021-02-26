import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenosVendidosComponent } from './menos-vendidos.component';

describe('MenosVendidosComponent', () => {
  let component: MenosVendidosComponent;
  let fixture: ComponentFixture<MenosVendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenosVendidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenosVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
