import fs from 'fs';
import readline from 'readline';

import enUs from '../assets/en-us';
import ptBr from '../assets/pt-br';
import messages from './messages';

class LanguageOption {
  Language;

  constructor(Language: string) {
    this.Language = Language;
  }
}

export default function configLanguage(): void {
  const languages = [new LanguageOption('en-us'), new LanguageOption('pt-br')];

  console.log('');
  console.log(
    '\x1b[1m',
    '\x1b[38;2;255;255;0m',
    `${messages.language}`,
    '\x1b[0m',
  );
  console.log('\x1b[1m');
  console.table([languages[0], languages[1]]);
  console.log('');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(messages.answer, languageOption => {
    if (languageOption !== '0' && languageOption !== '1') {
      console.log('');
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        `"${languageOption}${messages.invalidLanguage}`,
        '\x1b[0m',
      );
      rl.close();
      configLanguage();
    } else {
      fs.truncate('src/tools/messages.ts', error => {
        if (error) console.log(error);
      });

      if (languageOption === '0') {
        fs.appendFile('src/tools/messages.ts', enUs, error => {
          if (error) console.log(error);
        });

        console.log('');
        console.log(
          '\x1b[1m',
          '\x1b[38;2;0;255;155m',
          `➤  You chose the language: ${languages[languageOption].Language}`,
          '\x1b[0m',
        );
        console.log('');
      } else {
        fs.appendFile('src/tools/messages.ts', ptBr, error => {
          if (error) console.log(error);
        });

        console.log('');
        console.log(
          '\x1b[1m',
          '\x1b[38;2;0;255;155m',
          `➤  Você escolheu a linguagem: ${languages[languageOption].Language}`,
          '\x1b[0m',
        );
        console.log('');
      }
      rl.close();
    }
  });
}
