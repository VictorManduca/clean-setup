import fs from 'fs';
import path from 'path';
import {promisify} from 'util';
import {fileURLToPath} from 'url';

import ncp from 'ncp';

const make = promisify(fs.mkdir);
const access = promisify(fs.access);
const copy = promisify(ncp);

const currentFileUrl = import.meta.url;
const templateDir = path.resolve(
	path.dirname(fileURLToPath(new URL(currentFileUrl))),
	'../templates/clean-arch-node'
);

async function copyTemplateFiles(options) {
  return copy(templateDir, options.targetDirectory, {
    clobber: false,
  });
}

async function createProjectsFolder(options) {
  return make(options.name);
}

export async function createProject(options) {
  options = {
    ...options,
    targetDirectory: path.resolve(process.cwd(), options.name),
  };

  try {
    await access(templateDir, fs.constants.R_OK);
  } catch (err) {
    console.error({err});
    console.error('%s Invalid template name');
    process.exit(1);
  }

  await createProjectsFolder(options);
  await copyTemplateFiles(options);

  console.log('%s Project ready');
  return true;
}
