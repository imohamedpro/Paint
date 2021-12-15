import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefinedComponent } from './user-defined.component';

describe('UserDefinedComponent', () => {
  let component: UserDefinedComponent;
  let fixture: ComponentFixture<UserDefinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDefinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDefinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
