// components/Header.tsx
const Header: React.FC = () => (
    <header className="bg-gray-900 p-4">
      <nav className="container mx-auto">
        <ul className="flex justify-center space-x-4">
          <li><a href="#" className="hover:text-green-400">Home</a></li>
          <li><a href="#" className="hover:text-green-400">About</a></li>
          <li><a href="#" className="hover:text-green-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
  
  export default Header;