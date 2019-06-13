import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewThirdPartyTransfersComponent } from './review-transfers.component';

describe('ReviewTransfersComponent', () => {
  let component: ReviewThirdPartyTransfersComponent;
  let fixture: ComponentFixture<ReviewThirdPartyTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewThirdPartyTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewThirdPartyTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
