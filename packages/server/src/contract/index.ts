import { join } from 'node:path';
import { homedir } from 'node:os';

export const DOCS_PATH = join(homedir(), 'Documents');

export const PEAR_FILES_PATH = join(DOCS_PATH, 'Pear Files');

export const CONFIG_FILE_PATH = join(PEAR_FILES_PATH, `config.json`);

export const DEFAULT_CONFIG_FILE_PATH = join(PEAR_FILES_PATH, `default-config.json`);

export const DB_PATH = join(PEAR_FILES_PATH, 'db/pear-rec.db');
