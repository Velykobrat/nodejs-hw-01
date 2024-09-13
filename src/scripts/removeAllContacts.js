import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    // Очищаємо масив контактів
    const emptyContacts = [];

    // Записуємо порожній масив у файл
    await writeContacts(emptyContacts);

    console.log('All contacts have been removed.');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

removeAllContacts();


//Після виконання команди npm run remove-all, файл src/db/db.json повинен стати порожнім (містити порожній масив).
