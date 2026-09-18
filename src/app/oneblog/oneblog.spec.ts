import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oneblog } from './oneblog';

describe('Oneblog', () => {
  let component: Oneblog;
  let fixture: ComponentFixture<Oneblog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oneblog],
    }).compileComponents();

    fixture = TestBed.createComponent(Oneblog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
