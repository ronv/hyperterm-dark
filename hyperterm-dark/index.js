const backgroundColor = '#272222'
const foregroundColor = '#815555'
const cursorColor = foregroundColor
const borderColor = backgroundColor

const colors = [
  backgroundColor,
  '#584343',
  '#402B2B',
  '#562929',
  '#4E4545',
  '#3D3737',
  '#393131',
  '#312222',
  '#504848',
  '#5E5757',
  '#423A3A',
  '#806969',
  foregroundColor
]

exports.decorateConfig = config => {
  console.log('Hi man!')

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #272222 !important;
        border-bottom-color: rgba(0,0,0,.15) !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: rgba(0,0,0,.27) !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
    `
  })
}
