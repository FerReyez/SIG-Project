import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasMasComponent } from './categorias-mas.component';

describe('CategoriasMasComponent', () => {
  let component: CategoriasMasComponent;
  let fixture: ComponentFixture<CategoriasMasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasMasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
