import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/de'); // Redirecting to /de as default language
}
