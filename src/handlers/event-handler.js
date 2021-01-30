import { readdirSync } from 'fs';
import { resolve } from 'path';
import { bot } from '../bot.js';

export class EventHandler {
  async init() {
    const path = resolve('./src/handlers/events');
    const fileNames = readdirSync(path);

    for (const fileName of fileNames) {
      const { default: Event } = await import(`${path}/${fileName}`);
      const event = new Event();
      if (!event.on) continue;

      bot.on(event.on, event.invoke.bind(event));
    }

    const count = fileNames.length - 1;
    console.log(`Listening for ${count} events`);
  }
}
