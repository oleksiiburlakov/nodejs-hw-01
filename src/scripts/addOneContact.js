import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    try {
        const contact = createFakeContact();
        const res = await readContacts();
        const existContacts = [...res, contact]
        await writeContacts(existContacts);
        console.log('Contact added');

    } catch (error) {
        console.log(error);

    }

};

addOneContact();
