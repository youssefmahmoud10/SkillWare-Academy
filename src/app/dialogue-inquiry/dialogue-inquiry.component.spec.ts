import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueInquiryComponent } from './dialogue-inquiry.component';

describe('DialogueInquiryComponent', () => {
  let component: DialogueInquiryComponent;
  let fixture: ComponentFixture<DialogueInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueInquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
