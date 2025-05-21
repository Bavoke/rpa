const inquirer = require('inquirer');
const { extractWithEmailRegex } = require('./extractors/regex');
const { extractWithoutRegex } = require('./extractors/no-regex');
const sendEmail = require('./mailer');

async function main() {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'sentence',
        message: 'Enter a sentence containing an email address:'
      },
      {
        type: 'list',
        name: 'method',
        message: 'Choose extraction method:',
        choices: ['RegEx', 'No RegEx']
      }
    ]);

    console.log('User Input:', answers.sentence);
    console.log('Selected Method:', answers.method);

    let email;
    if (answers.method === 'RegEx') {
      email = extractWithEmailRegex(answers.sentence);
    } else {
      email = extractWithoutRegex(answers.sentence);
    }

    if (email) {
      console.log(`Extracted Email: ${email}`);
      await sendEmail(email);
      console.log('📬 Confirmation email sent!');
    } else {
      console.log('❌ No valid email found.');
    }

  } catch (error) {
    console.error('🚨 Error occurred:', error);
  }
}

main();