import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrakPage } from './trak.page';

describe('TrakPage', () => {
  let component: TrakPage;
  let fixture: ComponentFixture<TrakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
