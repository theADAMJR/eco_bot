import { config } from 'dotenv';
config({ path: '.env' });

import { EventHandler } from './handlers/event-handler.js';
import { Deps } from '../src/utils/deps.js';
import { Client } from 'discord.js';
import mongoose from 'mongoose';

export const bot = new Client();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/eco_bot', {
  useFindAndModify: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

bot.login(process.env.BOT_TOKEN);

Deps.get(EventHandler).init();

import '../src/dashboard/server.js';
