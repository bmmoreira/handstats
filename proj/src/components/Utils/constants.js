/** @format */

export const APP_NAME = 'Handball is Fun';
//export const BASE_URL = 'https://api.maphidro.com';
//export const LOGIN_URL = 'http://localhost:8080';
export const LOGIN_URL = 'https://mh-api.maphidro.com';
export const COLLECTION_NAME = 'api/mhstations';
export const PASSMINLENGHT = 5;

export const BASE_URL = "https://api.handballisfun.org";
export const COLLECTION_NAME_GAMEACTIONS = "api/game-actions";
export const TOKEN =
  "eb665dd5904c3c6f47680ed7c5b11722340bc8f23c56a7f459ad4f090e289783c57f16af5965c2d315f634b3db98c731289915b89495f518ab286f547e7c0b19acbe53fc1f05d863bc833f1b561b3672a5cf689a9e5f367dbe28a1925f64380582f8059f6c09c72258b0c33bab04017e8560566cf7ead7a6913fbb8e701f2ab9";

export const defaultColors = {
  primary: '#fde581ff',
  secondary: '#f55760ff',
  terciary: '#fde581ff',
  quaternary: '#1a535c'
}

export const primaryColor = '#fde581ff';
export const secondaryColor = '#f55760ff';
export const terciaryColor = '#fde581ff';
export const quaternaryColor = '#f55760ff';

export const appSettings = {
  mobileBreakpoint: 900
};

export const bgColor = '#312f38';
export const bgColorButton = '#44414d';
export const bgColorBox = '#615d6f';
export const bgColorButtonTitle = '#f0f0f0';

export const styleGray = {
  bg: '#312f38',
  bgButton: '#44414d',
  bgButtonHover: '#565262',
  bgButtonActive: '#565262',
  borderColor: '#28262e',
  borderColorHover: '#767187',
  borderColorActive: '#f0f0f0',
  bgBox: '#615d6f',
  colorButtonTitle: '#f0f0f0',
  boxShadowFocus: '0 0 0 0.2rem rgba(64,70,74,.5)'
};
//0688c6
export const styleWhite = {
  bg: '#b3e5f7',
  bgButton: '#0f9bd9',
  bgButtonHover: '#0677b2',
  bgButtonActive: '#4fc3f7',
  borderColor: '#28262e',
  borderColorHover: '#767187',
  borderColorActive: '#f0f0f0',
  bgBox: '#e1f5fc',
  colorButtonTitle: '#f0f0f0',
  boxShadowFocus: '0 0 0 0.2rem rgba(64,70,74,.5)'
};

export const loginButtom = {
  backgroundColor: styleWhite.bgButton,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  fontSize: '0.9rem',
  height: '30px',
  width: '140px',
  borderRadius: '5px',
  marginTop: '5px',
  color: styleWhite.colorButtonTitle,
  '&:hover': {
    backgroundColor: styleWhite.bgButtonHover,
    borderColor: styleWhite.borderColorHover,
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: styleWhite.bgButtonActive,
    borderColor: styleWhite.borderColorActive
  },
  '&:focus': {
    boxShadow: styleWhite.boxShadowFocus
  }
};

export const roundedButton = {
  backgroundColor: styleWhite.bgButton,
  color: styleWhite.colorButtonTitle,

  '&:hover': {
    backgroundColor: styleWhite.bgButtonHover,
    borderColor: styleWhite.borderColorHover,
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: styleWhite.bgButtonActive,
    borderColor: styleWhite.borderColorActive
  },
  '&:focus': {
    boxShadow: styleWhite.boxShadowFocus
  }
};

export const buttonStyle = {
  backgroundColor: styleWhite.bgButton,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  justifyContent: 'center',
  fontSize: '0.9rem',
  height: '80px',
  width: '80px',
  borderRadius: '5px',
  color: styleWhite.colorButtonTitle,
  '&:hover': {
    backgroundColor: styleWhite.bgButtonHover,
    borderColor: styleWhite.borderColorHover,
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: styleWhite.bgButtonActive,
    borderColor: styleWhite.borderColorActive
  },
  '&:focus': {
    boxShadow: styleWhite.boxShadowFocus
  }
};


export const playersList = [
  { name: "Afonso Simoes", nickname: 'Simoes', number: 1, id: 1, active: false, state: 'B', selected: false, pos: "PD" },
  { name: "Alexandre Silva", nickname: 'Silva', number: 2, id: 2, active: false, state: 'B', selected: false, pos: "PV" },
  { name: "Christian Rato", nickname: 'Rato', number: 3, id: 3, active: false, state: 'B', selected: false, pos: "LE" },
  { name: "Diogo Antunes", nickname: 'Antunes', number: 4, id: 4, active: false, state: 'F', selected: false, pos: "PV" },
  { name: "Goncalo Cardoso", nickname: 'Cardoso', number: 5, id: 5, active: false, state: 'B', selected: false, pos: "PD" },
  { name: "Joao Porta­rio", nickname: 'Porta­rio', number: 6, id: 6, active: false, state: 'B', selected: false, pos: "PE" },
  { name: "Lui­s Freitas", nickname: 'Freitas', number: 7, id: 7, active: false, state: 'B', selected: false, pos: "PV" },
  { name: "Miguel Silvario", nickname: 'Silvario', number: 8, id: 8, active: false, state: 'B', selected: false, pos: "LD" },
  { name: "Pedro Pires", nickname: 'Pires', number: 9, id: 9, active: false, state: 'B', selected: false, pos: "C" },
  { name: "Rodrigo Rocha", nickname: 'Rocha', number: 10, id: 10, active: false, state: 'B', selected: false, pos: "LE" },
  { name: "Tiago Sousa", nickname: 'Sousa', number: 11, id: 11, active: false, state: 'B', selected: false, pos: "PD" },
  { name: "Tomas Campos", nickname: 'Campos', number: 12, id: 12, active: false, state: 'F', selected: false, pos: "LD" },
  { name: "Filipe Silva", nickname: 'Silva', number: 13, id: 13, active: false, state: 'F', selected: false, pos: "LE" },
  { name: "Martim Brito", nickname: 'Brito', number: 14, id: 14, active: false, state: 'B', selected: false, pos: "GR" },
  { name: "Miguel Virgario", nickname: 'Virgario', number: 15, id: 15, active: false, state: 'F', selected: false, pos: "C" },
  { name: "Orlando Quenduca", nickname: 'Quenduca', number: 16, id: 16, active: false, state: 'F', selected: false, pos: "GR" },
  { name: "Rafael Ferreira", nickname: 'R. Ferreira', number: 17, id: 17, active: false, state: 'F', selected: false, pos: "PE" },
  { name: "Tomas Ferreira", nickname: 'T. Ferreira', number: 18, id: 18, active: false, state: 'F', selected: false, pos: "PD" },
  { name: "Mauro Rodrigues", nickname: 'Rodrigues', number: 19, id: 19, active: false, state: '0', selected: false, pos: "PE" },
];


export class Player {
  constructor(name, id) {
      this.name = name;
      this.id = id;
  }
}