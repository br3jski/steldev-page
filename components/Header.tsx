// components/Header.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="bg-gray-900 p-4">
      <nav className="container mx-auto">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="/" className={`hover:text-green-400 ${router.pathname === '/' ? 'text-green-400' : 'text-white'}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`hover:text-green-400 ${router.pathname === '/about' ? 'text-green-400' : 'text-white'}`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/company" className={`hover:text-green-400 ${router.pathname === '/company' ? 'text-green-400' : 'text-white'}`}>
              Company
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;