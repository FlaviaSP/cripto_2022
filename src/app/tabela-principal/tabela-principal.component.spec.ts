import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPrincipalComponent } from './tabela-principal.component';

describe('TabelaPrincipalComponent', () => {
  let component: TabelaPrincipalComponent;
  let fixture: ComponentFixture<TabelaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
