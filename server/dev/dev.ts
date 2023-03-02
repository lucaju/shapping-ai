import kleur from 'kleur';
import { Express } from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../../webpack.config';

export const devTools = (app: Express) => {
  const compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: '/',
      writeToDisk: true,
      stats: { colors: true },
    })
  );
  kleur.bgBlue().black(`\n Dev Server is online! \n`);
};
