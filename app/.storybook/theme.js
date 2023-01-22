// .storybook/YourTheme.js

import { create } from '@storybook/theming';
import logo from "./logo.png"
export default create({
  base: 'dark',
  brandTitle: 'Natures Secret',
  brandUrl: 'https://naturessecret.co',
  brandImage: logo,
  brandTarget: '_self',
});