import Command from './command.js';
import { Users } from '../../data/users.js';
import canvacord from 'canvacord';
import { Deps } from '../../utils/deps.js';
import { MessageAttachment } from 'discord.js';

const { Rank } = canvacord;

export default class extends Command {
  name = 'profile';

  constructor() {
    super();
    this.users = Deps.get(Users);
  }
  
  async execute(msg) {
    const savedUser = await this.users.get(msg.author.id);

    const rank = new Rank()
      .setAvatar(msg.author.displayAvatarURL)
      .setCurrentXP(savedUser.coins)
      .setDiscriminator(msg.author.discriminator)
      .setUsername(msg.author.username)
      .build();

    await msg.channel.send({
      files: [{
        attachment: rank,
        name: 'profile.png'
      }]
    });
  }
}
