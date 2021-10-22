import app from './server';
import chalk from 'chalk';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    chalk.bgGreen.black(`\n Server listening on port ${port}! \n`)
  );
});
