import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";

export const removeAllContacts = async () => {
    try {
        await writeContacts([]);
        await readContacts();
    } catch (error) {
    }
};

removeAllContacts();
