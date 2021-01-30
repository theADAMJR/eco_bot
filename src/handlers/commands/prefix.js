import { Deps } from '../../utils/deps.js';
import { Guilds } from '../../data/guilds.js';
import Command from './command.js';

export default class extends Command {
  name = 'prefix';

  constructor() {
    super();
    this.guilds = Deps.get(Guilds);
  }  

  async execute(msg, newPrefix) {
    const savedGuild = await this.guilds.get(msg.guild.id);
    if (!newPrefix)
      return msg.reply(`Current prefix: \`${savedGuild.prefix}\``);

    savedGuild.prefix = newPrefix;
    await savedGuild.updateOne(savedGuild);

    return msg.reply(`New prefix: \`${newPrefix}\``);
  }
}
