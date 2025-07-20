import UsersBlock from "./users-block.js";

export default class App {
    #usersBlock;

    constructor() {
        this.#usersBlock = new UsersBlock();
    }

    run() {
        this.#usersBlock.showUsers();
    }
}