require('colors');
const { bgWhite } = require('colors');
const app = require('./app');



async function main() {
    await app.listen(app.get('port'))

    console.log(`\n- Server started on port ${app.get('port')}`.america,'\n- URL: http://localhost:5000\n'.cyan.bold);


}



main();
