import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingComponent } from './savings.component';

describe('SavingsComponent', () => {
  let component: SavingComponent;
  let fixture: ComponentFixture<SavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
