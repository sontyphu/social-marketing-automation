/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './thanh-toan.html'],
  theme: {
    extend: {
      colors: { primary: '#8200FA', accent: '#BE24C3', plum: '#220041', fb: '#1877F2' },
      fontFamily: { sans: ['"Be Vietnam Pro"', 'sans-serif'] },
      maxWidth: { sm: '499px', md: '582px', lg: '666px', xl: '749px', '2xl': '874px', '3xl': '998px', '4xl': '1165px', '5xl': '1331px' }
    }
  }
}
