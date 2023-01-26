import { create } from '@storybook/theming';
import logo from "./logo.png"


export default create({
  base: 'dark',
  brandTitle: 'Nature\'s Secret',
  brandUrl: 'https://naturessecret.co',
  brandImage: logo,
  brandTarget: '_self',

  colorPrimary: 'yellow',
  colorSecondary: 'green',

  appBg: 'black',
  appContentBg: 'black',
  appBorderColor: 'white',
  appBorderRadius: 12,

  fontBase: '"Cambria", serif',
  fontCode: 'monospace',

  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',

  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'green',

  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 12,


});