import DetailsBlock from "./details-block.js";
import { createImage, insertRow, getRemoteData } from "./utils.js";

export default class UsersBlock {
    #table;
    #loader;

    constructor() {
        this.#table = document.querySelector("#users");
        this.#loader = document.querySelector("#users-loader");
        this.#loader.classList.toggle("invisible");
    }

    async showUsers() {
        try {
            const users = await getRemoteData("users?per_page=10");
            users.forEach((user) => {
                const elements = [createImage(user.avatar_url), user.login];
                insertRow(this.#table, elements, async() => {
                    const details = new DetailsBlock(user.login);
                    await details.showDetails();
                });
            });
        } catch (error) {
            console.log(error);
        } finally {
            this.#loader.classList.toggle("invisible");
        }
    }
}