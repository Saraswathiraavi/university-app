import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilmuDetailsComponent } from './wilmu-details.component';

describe('WilmuDetailsComponent', () => {
  let component: WilmuDetailsComponent;
  let fixture: ComponentFixture<WilmuDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WilmuDetailsComponent]
    });
    fixture = TestBed.createComponent(WilmuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
