import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        const data = await readContacts();
        return data;
    } catch (error) {
        console.log(error);
    }
};

console.log('All contacts: ', await getAllContacts());
