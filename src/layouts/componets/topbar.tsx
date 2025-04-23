import { FiSearch, FiBell } from 'react-icons/fi';
const Topbar = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center px-10 py-3 fixed top-0 left-0 right-0 z-50">
      <h1 className="text-2xl font-bold text-blue-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="p-2 text-gray-600 hover:text-blue-800 relative">
          <FiBell />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center">
          <img
            src="https://scontent.fdad5-1.fna.fbcdn.net/v/t39.30808-1/480617761_2950671118607650_5683417399989200586_n.jpg?stp=c0.528.1365.1365a_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Mv5rh01YkbAQ7kNvwGunrbF&_nc_oc=AdmyEZIG6fQMbcWKFQl0mhrW1t7pbbky1PnJ5PHyTb544odiPgki_mJIZbmDurLPI9w&_nc_zt=24&_nc_ht=scontent.fdad5-1.fna&_nc_gid=Dw7vlOy7ONquZWaHINIu5w&oh=00_AfHlBqs-PhctJHLbvJSHSuuhYJO8QLURp_14DNq7c6DLwg&oe=680E9D31"
            alt="User"
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
};
export default Topbar;
