import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CptComponent } from './cpt.component';

describe('CptComponent', () => {
  let component: CptComponent;
  let fixture: ComponentFixture<CptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CptComponent]
    });
    fixture = TestBed.createComponent(CptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
