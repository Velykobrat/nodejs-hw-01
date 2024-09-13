import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    // Читаємо існуючі контакти з файлу
    const contacts = await readContacts();

    // Перевіряємо, чи є контакти в масиві
    if (contacts.length > 0) {
      // Видаляємо останній контакт
      contacts.pop();

      // Записуємо оновлений масив контактів назад у файл
      await writeContacts(contacts);

      console.log('Last contact removed.');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

removeLastContact();


//Після виконання команди npm run remove-last, останній контакт повинен бути видалений із файлу src/db/db.json. Якщо контактів немає, виводиться відповідне повідомлення.
