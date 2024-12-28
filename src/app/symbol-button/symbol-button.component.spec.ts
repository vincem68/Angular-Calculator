import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolButtonComponent } from './symbol-button.component';

describe('SymbolButtonComponent', () => {
  let component: SymbolButtonComponent;
  let fixture: ComponentFixture<SymbolButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SymbolButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymbolButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
