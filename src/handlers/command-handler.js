import { readdirSync } from 'fs';
import { resolve } from 'path';
import { bot } from '../bot.js';

export class CommandHandler {
  commands = new Map();

  async init() {
    const path = resolve('./src/handlers/commands');
    const fileNames = readdirSync(path);

    for (const fileName of fileNames) {
      const { default: Command } = await import(`${path}/${fileName}`);
      const command = new Command();
      if (!command.name) continue;

      this.commands.set(command.name, command);
    }

    console.log(`Initialized ${this.commands.size} commands`);
  }

  async handle(prefix, msg) {
    const name = msg.content
      .slice(prefix.length)
      .split(' ')[0];

    const args = msg.content
      .slice(prefix.length + name.length)
      .split(' ');

    const command = this.commands.get(name);
    await command?.execute(msg, ...args);
  }
}
