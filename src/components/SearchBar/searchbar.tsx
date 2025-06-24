import { FaSearch } from 'react-icons/fa';
interface SearchBarProps {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ value = '', onChange }) => {
  return (
    <div className="relative">
      <FaSearch className="absolute left-[400px] top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        name="name"
        className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
