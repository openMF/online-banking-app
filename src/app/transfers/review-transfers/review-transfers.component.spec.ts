import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTransfersComponent } from './review-transfers.component';

describe('ReviewTransfersComponent', () => {
  let component: ReviewTransfersComponent;
  let fixture: ComponentFixture<ReviewTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
