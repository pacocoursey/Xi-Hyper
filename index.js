const foregroundColor = '#495057';
const backgroundColor = '#fff';
const selectionColor = 'rgba(0, 0, 0, 0.1)';
const black = '#212529';
const red = '#868e96';
const green = '#343a40';
const yellow = '#495057';
const blue = '#212529';
const magenta = '#adb5bd';
const cyan = '#dee2e6';
const white = '#868e96';
const lightBlack = '#343a40';
const lightWhite = '#f1f3f5';
const darkBlue = '#343a40';

const white = '#fff';
const black = '#000';
const faded = 'rgba(0, 0, 0, 0.1)';
const oc-gray-0 = '#f8f9fa';
const oc-gray-1 = '#f1f3f5';
const oc-gray-2 = '#e9ecef';
const oc-gray-3 = '#dee2e6';
const oc-gray-4 = '#ced4da';
const oc-gray-5 = '#adb5bd';
const oc-gray-6 = '#868e96';
const oc-gray-7 = '#495057';
const oc-gray-8 = '#343a40';
const oc-gray-9 = '#212529';

exports.decorateBrowserOptions = defaults => Object.assign({}, defaults, {
  titleBarStyle: '',
  transparent: true,
  frame: false,
});

exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor,
  foregroundColor,
  selectionColor,
  borderColor: darkBlue,
  cursorColor: foregroundColor,
  colors: {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white: lightWhite,
    lightBlack,
    lightRed: red,
    lightGreen: green,
    lightYellow: yellow,
    lightBlue: blue,
    lightMagenta: magenta,
    lightCyan: cyan,
    lightWhite: white,
  },
  css: `
    ${config.css}
    .hyper_main {
      border: none !important;
    }
    .header_header {
      color: ${foregroundColor};
    }
    .header_windowHeaderWithBorder {
      border-color: ${backgroundColor} !important;
    }
    .tabs_list {
      border-bottom: 1px solid #e9ecef;
      margin-left: 0;
    }
    .tabs_borderShim {
      border-color: #e9ecef !important;
    }
    .tab_tab {
      border: 0;
    }
    .tab_tab.tab_active {
      background: ${backgroundColor};
      color: ${foregroundColor};
      transition: color 200ms;
    }
    .tab_tab:not(.tab_active) {
      background: #f8f9fa;
      color: ${cyan};
    }
    .tab_tab:not(.tab_active):hover {
      color: ${foregroundColor};
      transition: color 200ms;
    }
    .tab_icon {
      width: 15px;
      height: 15px;
      color: ${foregroundColor};
    }
    .tab_shape {
      width: 7px;
      height: 7px;
    }
    .splitpane_divider {
      background-color: #dee2e6 !important;
    }
  `,
});
