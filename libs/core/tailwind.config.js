module.exports = {
  darkMode: 'class',
  mode: 'jit',
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
  purge: {
    enabled: false,
    content: [
      './**/*.tsx',
      './**/*.ts'
    ]
  }
};
