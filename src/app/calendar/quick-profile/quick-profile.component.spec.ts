import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickProfileComponent } from './quick-profile.component';

describe('QuickProfileComponent', () => {
  let component: QuickProfileComponent;
  let fixture: ComponentFixture<QuickProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
