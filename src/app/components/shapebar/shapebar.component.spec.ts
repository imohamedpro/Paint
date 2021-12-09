import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapebarComponent } from './shapebar.component';

describe('ShapebarComponent', () => {
  let component: ShapebarComponent;
  let fixture: ComponentFixture<ShapebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
