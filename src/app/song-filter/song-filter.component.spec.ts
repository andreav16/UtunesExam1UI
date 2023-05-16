import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongFilterComponent } from './song-filter.component';

describe('SongFilterComponent', () => {
  let component: SongFilterComponent;
  let fixture: ComponentFixture<SongFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongFilterComponent]
    });
    fixture = TestBed.createComponent(SongFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
