import { createLink, insertRow, getRemoteData } from "./utils.js";

export default class DetailsBlock {
    #userName;
    #table;
    #loader;

    constructor(userName) {
        this.#userName = userName; 
        this.#table = document.querySelector("#details");
        this.#table.innerHTML = "";
        this.#loader = document.querySelector("#details-loader");
        this.#loader.classList.toggle("invisible");
    }

    async showDetails(){
        try {
            const details = await getRemoteData(`users/${this.#userName}`);

            const data = [
                ["Login", details.login],
                ["Name", details.name],
                ["GitHub", createLink(details.html_url)],
                ["Followers", details.followers],
                ["Registration date", new Date(details.created_at).toLocaleDateString("en-US")]
            ];

            data.forEach((d) => insertRow(this.#table, d))
        } catch (error) {
            console.log(error);
        } finally {
            this.#loader.classList.toggle("invisible");
        }
    }
}