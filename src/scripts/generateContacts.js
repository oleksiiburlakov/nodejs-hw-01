import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";

const generateContacts = async (number) => {
    let contactsArr = [];
    for(let i = 0; i < number; i++){
        contactsArr.push(createFakeContact());
    }
    const data = await readContacts();

    const updatedContacts = [...data, ...contactsArr];
    await writeContacts(updatedContacts);
};

generateContacts(5);
