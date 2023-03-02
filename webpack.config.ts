import path from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { EsbuildPlugin } from 'esbuild-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { EntryObject, ResolveOptions, RuleSetRule, WebpackPluginInstance } from 'webpack';
import WebpackBar from 'webpackbar';

// const env = process.env.NODE_ENV;

const isDev = process.env.NODE_isDev;

const entry: EntryObject = {
  app: [path.resolve(__dirname, 'src', 'index.tsx')],
};

const output = {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  pathinfo: isDev ? true : false,
};

const resolve: ResolveOptions = {
  alias: { '@src': path.resolve(__dirname, 'src/') },
  extensions: ['.tsx', '.ts', '.js', '.json'],
  fallback: {
    buffer: false,
    events: false,
    fs: false,
    path: false,
    process: false,
    querystring: false,
    string_decoder: false,
    url: false,
  },
};

const optimization = {
  emitOnErrors: isDev ? true : false,
  minimize: isDev ? false : true,
  minimizer: isDev ? [] : [new EsbuildPlugin({ target: 'es2020', css: true })],
  sideEffects: isDev ? false : true,
  usedExports: isDev ? false : true,
};

const plugins: WebpackPluginInstance[] = [
  new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  new CopyWebpackPlugin({
    patterns: [{ from: path.resolve(__dirname, 'src', 'assets'), to: 'assets' }],
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'index.html'),
    favicon: path.resolve(__dirname, 'src', 'assets', 'icons', 'favicon-32x32.png'),
  }),
  new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
  new WebpackBar({ color: isDev ? '#7e57c2' : '#9ccc65' }),
  // new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(env) }),
];

const rules: RuleSetRule[] = [
  {
    test: /\.[jt]sx?$/,
    loader: 'esbuild-loader',
    options: { tsconfig: './tsconfig.json', target: 'es2020' },
  },
  {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader'],
  },
  {
    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    type: 'asset',
    generator: { filename: 'fonts/[name][ext][query]' },
  },
  {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    generator: { filename: 'images/[name][ext][query]' },
  },
  {
    test: /\.svg$/,
    loader: 'svg-inline-loader',
    generator: { filename: 'images/[name][ext][query]' },
    options: { removeSVGTagAttrs: false },
  },
];

const webpackConfig: webpack.Configuration = {
  cache: isDev ? true : false,
  devtool: isDev ? 'inline-source-map' : 'source-map', // inline-source-map //'eval-source-map' (might be faster for dev),
  entry,
  mode: isDev ? 'development' : 'production',
  module: { rules },
  optimization,
  output,
  performance: { hints: isDev ? false : 'warning' },
  plugins,
  resolve,
  stats: isDev ? { children: true } : {},
  watch: isDev ? true : false,
};

export default webpackConfig;
