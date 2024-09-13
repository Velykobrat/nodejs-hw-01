import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    // Читаємо масив контактів з файлу
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Error getting contacts:', error);
    return [];
  }
};

console.log(await getAllContacts());

//Після виконання команди npm run get-all, у консолі має вивестися масив контактів з файлу src/db/db.json
