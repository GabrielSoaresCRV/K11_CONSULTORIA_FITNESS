import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsleterFormComponent } from './newsleter-form.component';

describe('NewsleterFormComponent', () => {
  let component: NewsleterFormComponent;
  let fixture: ComponentFixture<NewsleterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsleterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsleterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
