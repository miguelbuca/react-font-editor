module.exports = {
  rollup(config) {
    config.plugins.push(require('rollup-plugin-postcss')());
    return config;
  },
};
