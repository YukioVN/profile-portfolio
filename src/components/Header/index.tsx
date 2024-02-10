import Link from 'next/link';

import { ThemeButton } from './ThemeButton';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link href="/">
              <p className="text-2xl font-bold text-gray-800">Portifolio</p>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <>
                {[
                  { title: 'Projects', url: 'projects' },
                  { title: 'About', url: 'about' },
                  { title: 'Contact', url: 'contact' },
                ].map(({ title, url }) => (
                  <li key={url}>
                    <Link href={`/${url}`}>
                      <p className="text-gray-800">{title}</p>
                    </Link>
                  </li>
                ))}
                <ThemeButton
                />
              </>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};