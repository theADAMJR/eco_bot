import Event from './event.js';
import { bot } from '../../bot.js';
import { Deps } from '../../utils/deps.js';
import { CommandHandler } from '../command-handler.js';

export default class extends Event {
  on = 'ready';

  async invoke() {
    console.log(`${bot.user.username} is online`);

    await Deps.get(CommandHandler).init();
  }
}
