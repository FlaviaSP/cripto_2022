import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCambioComponent } from './tela-cambio.component';

describe('TelaCambioComponent', () => {
  let component: TelaCambioComponent;
  let fixture: ComponentFixture<TelaCambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCambioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
