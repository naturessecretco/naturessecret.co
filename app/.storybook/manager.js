// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import theme from "./theme"

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  theme: theme,
  enableShortcuts: true,
  showToolbar: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },

});