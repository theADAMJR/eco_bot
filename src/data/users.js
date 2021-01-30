import { SavedUser } from './models/user.js';

export class Users {
  async get(id) {
    return await SavedUser.findById(id)
      ?? await SavedUser.create({ _id: id });
  }
}
