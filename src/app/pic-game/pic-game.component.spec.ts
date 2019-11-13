import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicGameComponent } from './pic-game.component';

describe('PicGameComponent', () => {
  let component: PicGameComponent;
  let fixture: ComponentFixture<PicGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
