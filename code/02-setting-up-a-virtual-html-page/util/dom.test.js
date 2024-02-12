import fs from 'fs';
import path from 'path';

import { it, vi } from 'vitest';
// happy-domやjsdomはdomをサポートしているただの環境。
import { Window } from 'happy-dom';

import { showError } from './dom';
// cwd = current working directory
const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal('document', document);

it('first test', () => {
  showError('test');
});
