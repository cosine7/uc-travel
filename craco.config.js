const { resolve } = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@images': '@/assets/images',
      '@components': '@/components',
    },
  },
};