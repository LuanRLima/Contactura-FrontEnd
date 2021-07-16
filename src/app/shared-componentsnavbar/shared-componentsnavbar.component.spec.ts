import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedComponentsnavbarComponent } from './shared-componentsnavbar.component';

describe('SharedComponentsnavbarComponent', () => {
  let component: SharedComponentsnavbarComponent;
  let fixture: ComponentFixture<SharedComponentsnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedComponentsnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedComponentsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
