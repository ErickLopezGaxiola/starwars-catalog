import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedfilmsComponent } from './relatedfilms.component';

describe('RelatedfilmsComponent', () => {
  let component: RelatedfilmsComponent;
  let fixture: ComponentFixture<RelatedfilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedfilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
