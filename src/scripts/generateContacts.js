import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    // Читаємо існуючі контакти з файлу
    const existingContacts = await readContacts();

    // Генеруємо нові контакти
    const newContacts = Array.from({ length: number }, () => createFakeContact());

    // Додаємо нові контакти до існуючих
    const updatedContacts = [...existingContacts, ...newContacts];

    // Записуємо оновлений масив контактів назад у файл
    await writeContacts(updatedContacts);

    console.log(`${number} new contacts generated and added.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);

//Після виконання команди npm run generate, у файлі src/db/db.json повинна з'явитися передана кількість нових контактів
