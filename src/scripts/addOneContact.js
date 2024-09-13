import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    // Читаємо існуючі контакти з файлу
    const existingContacts = await readContacts();

    // Генеруємо один новий контакт
    const newContact = createFakeContact();

    // Додаємо новий контакт до існуючих
    const updatedContacts = [...existingContacts, newContact];

    // Записуємо оновлений масив контактів назад у файл
    await writeContacts(updatedContacts);

    console.log('One new contact added.');
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

addOneContact();


//Після виконання команди npm run add-one, у файлі src/db/db.json повинен з'явитися новий згенерований контакт.
