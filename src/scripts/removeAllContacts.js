import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";

export const removeAllContacts = async () => {
    try {
        await writeContacts([]);
        const data = await readContacts()
        console.log('File is empty now: ', data);

    } catch (error) {
        console.log(error);
    }
};

removeAllContacts();
