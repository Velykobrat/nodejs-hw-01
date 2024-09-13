import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2); // Форматуємо JSON для зручності читання
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log('Contacts successfully updated');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw new Error('Could not write contacts data');
  }
};
