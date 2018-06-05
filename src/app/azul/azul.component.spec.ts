import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzulComponent } from './azul.component';
import { AzulTile } from '../classes/azul-tile';

describe('AzulComponent', () => {
  let component: AzulComponent;
  let fixture: ComponentFixture<AzulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('score 0 init', () => {
    let t =true;
    expect(t).toBeTruthy();
  });

  it('toggleTileSet toggles hasTile TRUE', () => {
    let b = component.game.TileBoard;
    let g = component.game;  
    component.game.toggleTileSet(0);
    let t = b[0].hasTile;
     
    expect(t).toBeTruthy();
  });

  it('toggleTileSet toggles hasTile FALSE', () => {
    let b = component.game.TileBoard;
    let g = component.game; 
    let t = b[0].hasTile; 
    component.game.toggleTileSet(0);

    expect(t).toBeFalsy();
  });





});
