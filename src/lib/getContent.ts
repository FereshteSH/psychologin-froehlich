import { ReactNode } from 'react';
import de from '../data/de.json';
import tr from '../data/tr.json';

// Define the structure of your page content
type Content = {
  quoteHomeAuthor: string;
  quoteHome: string;
  buttonText: string;
  name: ReactNode;
  title: string;
  description?: string;
  content?: string;
};

// Define the available pages that can be in the JSON
type Pages = 'home' | 'about' | 'contact' | 'quotes'; // Ensure this matches your JSON keys

// Explicitly type the imported data as an object with the page keys
const deData = de as Record<string, any>;
const trData = tr as Record<string, any>;

export function getContent(lang: 'de' | 'tr', page: Pages): Content {
  const data = lang === 'de' ? deData : trData;
  return data[page];
}
