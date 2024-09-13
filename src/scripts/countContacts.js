import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    // Читаємо масив контактів з файлу
    const contacts = await readContacts();

    // Повертаємо кількість елементів у масиві
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    return 0;
  }
};

console.log(await countContacts());


//Після виконання команди npm run count, у консолі має відобразитися кількість контактів, які зберігаються у файлі src/db/db.json.
