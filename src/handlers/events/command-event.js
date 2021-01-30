import Event from './event.js';
import { Deps } from '../../utils/deps.js';
import { CommandHandler } from '../command-handler.js';

export default class extends Event {
  on = 'message';

  constructor() {
    super();
    this.commandHandler = Deps.get(CommandHandler);
  }

  async invoke(msg) {
    if (!msg.guild && msg.author.bot) return;

    const prefix = '.';
    if (msg.content.startsWith(prefix))
      await this.commandHandler.handle(prefix, msg);
  }
}
