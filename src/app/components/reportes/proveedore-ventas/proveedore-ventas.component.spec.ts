import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoreVentasComponent } from './proveedore-ventas.component';

describe('ProveedoreVentasComponent', () => {
  let component: ProveedoreVentasComponent;
  let fixture: ComponentFixture<ProveedoreVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedoreVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedoreVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
