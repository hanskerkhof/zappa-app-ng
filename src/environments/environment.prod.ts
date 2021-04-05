declare var require: any;

export const environment = {
  production: true,
  appVersion: require('../../package.json').version
};
