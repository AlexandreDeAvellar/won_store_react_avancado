module.exports = {
  "stories": [
    "../src/components/**/stories.mdx",
    "../src/components/**/stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-controls"
  ],

  "framework": "@storybook/nextjs",
  "staticDirs": ['../public'],
  // "core": {
  //   "builder": "@storybook/builder-webpack5"
  // },

  docs: {
    autodocs: true
  }
}
