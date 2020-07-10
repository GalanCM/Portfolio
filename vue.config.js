module.exports = {
  lintOnSave: false,

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/', "/about", "/code-samples", "/portfolio"
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
};
