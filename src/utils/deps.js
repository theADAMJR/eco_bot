export class Deps {
  static #instances = [];

  static get(type) {
    return this.#instances.find(i => i instanceof type)
      ?? this.#add(type);
  }

  static #add(type) {
    const instance = new type();
    this.#instances.push(instance);
    return instance;
  }
}
