const service = require('./service');

function welcome() {
  process.stdout.write('\ngamification started running...\n');
}

module.exports = function () {
  welcome();
  let var=10;
  let var1=11;
  let app = service.createApp();
  app = service.setupWebpack(app);
  app = service.setupStaticRoutes(app);
  app = service.setupMiddlewares(app);
  app = service.setupAppRoutes(app);
  app = service.setupRESTRoutes(app);
  service.setupMongooseConnections();
  return app;
};
