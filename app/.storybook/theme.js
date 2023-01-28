import { create } from '@storybook/theming';
import logo from "./logo.png"


export default create({
  base: 'light',
  brandTitle: 'Nature\'s Secret',
  brandUrl: 'https://naturessecret.co',
  brandImage: logo,
  brandTarget: '_self',
  colorPrimary: 'yellow',
  colorSecondary: 'green',
  appBg: 'white',
  appContentBg: 'black',
  appBorderColor: 'black',
  appBorderRadius: 12,
  fontBase: '"Cambria", serif',
  fontCode: 'monospace',
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'green',
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 12,
});