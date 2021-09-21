const db = require('./models');

(async function() {

  await db.Peep.destroy({ truncate: true });
  
  const newPeep = await db.Peep.bulkCreate(
    [
      {
        firstName: 'Yuri',
        lastName: 'Polowski'
      },
      {
        firstName: 'Sam',
        lastName: 'Gamgee'
      },
      {
        firstName: 'Sarah',
        lastName: 'Roobs'
      }
    ]
  );

  console.log(newPeep);

  process.exit();
}());

