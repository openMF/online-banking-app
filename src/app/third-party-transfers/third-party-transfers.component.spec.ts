import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyTransfersComponent } from './third-party-transfers.component';

describe('ThirdPartyTransfersComponent', () => {
  let component: ThirdPartyTransfersComponent;
  let fixture: ComponentFixture<ThirdPartyTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPartyTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
