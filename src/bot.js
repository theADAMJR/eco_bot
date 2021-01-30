import { config } from 'dotenv';
config({ path: '.env' });

import { EventHandler } from './handlers/event-handler.js';
import { Deps } from '../src/utils/deps.js';
import { Client } from 'discord.js';

export const bot = new Client();

bot.login(process.env.BOT_TOKEN);

Deps.get(EventHandler).init();
