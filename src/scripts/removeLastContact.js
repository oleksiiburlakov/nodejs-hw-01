import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const data = await readContacts();
        const lastContact = data[data.length - 1];

        const contacts = data.filter(contact => contact !== lastContact);
        await writeContacts(contacts);
        console.log('Contacts: ', contacts, ', deleted contact: ', lastContact);

    } catch (error) {
        console.log(error);

    }
};

removeLastContact();
