module.exports = {
  darkMode: 'class',
  variants: {
    opacity: ['responsive', 'hover'],
  },
  purge: {
    enabled: false,
    content: [
      './**/*.tsx',
      './**/*.ts'
    ],
  },
};
