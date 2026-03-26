import { Search } from "lucide-react";
import { useContext } from "react";
import { WeatherContext } from "../../context/Context";



const SearchBar = () => {

const {cityName, setCityName, handleSearchCity} = useContext(WeatherContext)

  return (
    <>
      <aside className="flex items-center gap-3">
        <input type="text" value={cityName} onChange={(e)=>setCityName(e.target.value)} placeholder="Search for any city... " className="text-white border-gray-500/50 border rounded-xl py-3 px-5 w-60 md:w-150  bg-white/10 focus:outline-none focus:border-[#3B82F6] transition-all " />
      <button onClick={handleSearchCity} className="cursor-pointer bg-gradient-to-br from-[#3B82F6] to-[#6366F1] rounded-2xl py-3 px-5 ">
        <Search className="text-white " />
      </button>
      </aside>
    </>
  );
};

export default SearchBar;
