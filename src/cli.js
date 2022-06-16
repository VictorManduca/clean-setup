import arg from 'arg';
import inquirer from 'inquirer';

import {createProject} from './helper';

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
      {
        '--name': String,
      },
      {
        argv: rawArgs.slice(2),
      },
  );
  return {
    name: args['--name'] || '',
  };
}

async function promptForMissingOptions(options) {
  const defaultProjectName = 'node-app';

  const questions = [];
  if (!options.name) {
    questions.push({
      type: 'input',
      name: 'name',
      message: 'What\'s the project\'s name?',
      default: defaultProjectName,
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    name: options.name || answers.name,
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createProject(options);
}
