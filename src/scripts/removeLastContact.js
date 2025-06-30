import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const data = await readContacts();
        const contacts = data.slice(0, -1); // видаляємо останній елемент
        await writeContacts(contacts);
    } catch (error) {

    }
};

removeLastContact();
