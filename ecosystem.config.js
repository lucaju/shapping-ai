module.exports = {
  apps: [
    {
      name: 'shapping-ai-website',
      script: 'ts-node ./server/index.ts',
      args: '--no-daemon',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
