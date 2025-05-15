import de from '../data/de.json';
import tr from '../data/tr.json';

// Define the structure of your page content
type Content = {
  name: ReactNode;
  title: string;
  description?: string;
  content?: string;
};

// Define the available pages that can be in the JSON
type Pages = 'home' | 'about'; // Ensure this matches your JSON keys

// Explicitly type the imported data as an object with the page keys
const deData: Record<Pages, Content> = de;
const trData: Record<Pages, Content> = tr;

export function getContent(lang: 'de' | 'tr', page: Pages): Content {
  const data = lang === 'de' ? deData : trData;
  return data[page];
}
