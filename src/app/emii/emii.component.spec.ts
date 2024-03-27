import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiiComponent } from './emii.component';

describe('EmiiComponent', () => {
  let component: EmiiComponent;
  let fixture: ComponentFixture<EmiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmiiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
