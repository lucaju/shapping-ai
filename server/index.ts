import app from './server';
import kleur from 'kleur';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(kleur.bgGreen().black(`\n Server listening on port ${port}! \n`));
});
