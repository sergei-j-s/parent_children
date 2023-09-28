import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    ['shadow-top-panel', {
      'box-shadow': '0px 1px 0px rgba(17, 17, 17, 0.1)'
    }],
    ['shadow-bottom-panel', {
      'box-shadow': '0px -1px 0px rgba(17, 17, 17, 0.1)'
    }],
    ['form-input', {
      'height': '55px',
      'padding': '0px 16px',
      'margin-top': '0px',
      'outline': 'none',
      'border': 'none',
      'font-size': '14px',
      'color': '#111111',
      'background': 'transparent'
    }],
    ['form-label', {
      'padding-left': '18px',
      'color': '#bdbdbd',
      'transform': 'translateY(1rem)',
      'transform-origin': 'left top',
      'cursor': 'text',
      'transition': 'all 0.3s',
      'font-size': '14px',
      'color': '#1111117A',
      'user-select': 'none',
      'position': 'absolute'
    }]
  ]
})