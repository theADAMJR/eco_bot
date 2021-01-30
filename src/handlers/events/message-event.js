import Event from './event.js';
import { Deps } from '../../utils/deps.js';
import { CommandHandler } from '../command-handler.js';
import { Guilds } from '../../data/guilds.js';
import { Users } from '../../data/users.js';

export default class extends Event {
  on = 'message';

  constructor() {
    super();
    this.commandHandler = Deps.get(CommandHandler);
    this.guilds = Deps.get(Guilds);
    this.users = Deps.get(Users);
  }

  async invoke(msg) {
    if (!msg.guild && msg.author.bot) return;

    const { prefix } = await this.guilds.get(msg.guild.id);
    if (msg.content.startsWith(prefix))
      return this.commandHandler.handle(prefix, msg);

    const savedUser = await this.users.get(msg.author.id);
    savedUser.coins += 5;
    await savedUser.save();
  }
}
