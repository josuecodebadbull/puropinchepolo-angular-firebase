import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolopanelsComponent } from './polopanels.component';

describe('PolopanelsComponent', () => {
  let component: PolopanelsComponent;
  let fixture: ComponentFixture<PolopanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolopanelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolopanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
