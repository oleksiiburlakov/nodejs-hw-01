import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const contacts = await fs.readFile(PATH_DB, 'utf8');
        return JSON.parse(contacts);
    } catch (error) {
        console.log(error);

    }
};
