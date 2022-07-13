import axios from "axios";

class HttpService {
    constructor() {
        this.baseUrl = 'http://www.dnd5eapi.co/api/';
    }

    async getSpellList() {
        return await axios.get(`${this.baseUrl}/spells`);
    }

    async getSpellByIndex(index) {
        return await axios.get(`${this.baseUrl}/spells/${index}`);
    }

}

export const httpService = new HttpService();