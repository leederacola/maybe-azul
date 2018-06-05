import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzulComponent } from './azul.component';
import { AzulTile } from '../classes/azul-tile';

describe('AzulComponent', () => {
  let component: AzulComponent;
  let fixture: ComponentFixture<AzulComponent>;
  let g;
  let b;

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
    b = component.game.TileBoard;
    g = component.game;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('score 0 init', () => {
    let t =true;
    expect(t).toBeTruthy();
  });

  it('toggleTileSet toggles hasTile TRUE', () => {
    b = component.game.TileBoard;
    g = component.game;  
    component.game.toggleTileSet(0);
    let t = b[0].hasTile;
     
    expect(t).toBeTruthy();
  });

  it('toggleTileSet toggles hasTile FALSE', () => {
    b = component.game.TileBoard;
    g = component.game; 
    let t = b[0].hasTile; 
    component.game.toggleTileSet(0);

    expect(t).toBeFalsy();
  });

  // tile edge cases
  it('SCORE TILE top row', ()=>{
    b[0].hasTile = true;
    b[1].hasTile = true;
    b[2].hasTile = true;
    b[3].hasTile = true;
    b[4].hasTile = true;
    let score = 0;
    component.currentTile = 4;
    component.scoreTile();
    expect(component.score == 5 ).toBeTruthy();
  });

  it('SCORE TILE bottom row', ()=>{
    b[20].hasTile = true;
    b[21].hasTile = true;
    b[22].hasTile = true;
    b[23].hasTile = true;
    b[24].hasTile = true;
    let score = 0;
    component.currentTile = 24;
    component.scoreTile();
    expect(component.score == 5 ).toBeTruthy();
  });

  it('SCORE TILE vert row', ()=>{
    b[2].hasTile = true;
    b[7].hasTile = true;
    b[12].hasTile = true;
    b[17].hasTile = true;
    b[22].hasTile = true;
    let score = 0;
    component.currentTile = 12;
    component.scoreTile();
    expect(component.score == 5 ).toBeTruthy();
  });

  it('SCORE TILE vert row', ()=>{
    b[0].hasTile = true;
    b[5].hasTile = true;
    b[10].hasTile = true;
    b[15].hasTile = true;
    b[20].hasTile = true;
    let score = 0;
    component.currentTile = 20;
    component.scoreTile();
    expect(component.score == 5 ).toBeTruthy();
  });

  it('SCORE TILE vert row', ()=>{
    b[0].hasTile = true;
    b[1].hasTile = true;
    b[2].hasTile = true;
    b[6].hasTile = true;
    b[11].hasTile = true;
    let score = 0;
    component.currentTile = 1;
    component.scoreTile();
    expect(component.score == 6 ).toBeTruthy();
  });

  it('SCORE TILE Center 2 on each side', ()=>{
    b[2].hasTile = true;
    b[7].hasTile = true;
    b[17].hasTile = true;
    b[22].hasTile = true;

    b[12].hasTile = true;

    b[10].hasTile = true;
    b[11].hasTile = true;
    b[13].hasTile = true;
    b[14].hasTile = true;

    let score = 0;
    component.currentTile = 12;
    component.scoreTile();
    console.log(component.score);
    expect(component.score == 10 ).toBeTruthy();
  });









});
