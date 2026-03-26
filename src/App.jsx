import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import HeroCard from "./components/HeroCard/HeroCard";
import { WeatherContext, WeatherDataContext } from "./context/Context";
import { motion } from "motion/react";
import { CloudOff, RotateCw } from "lucide-react";
import SkeletonLoading from "./components/SkeletonLoading";
import HasSearched from "./HasSearched";
import ErrorState from "./components/ErrorState";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

const searchFunction = async (city) => {
  if (!city) return alert("input field is empty");

  setLoading(true);

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
    const req = await fetch(url);
    const data = await req.json();

    if (data.cod !== 200) {
      console.log("city not found");

      setTimeout(() => {
        setWeatherData(null);
        setLoading(false);
      }, 1000); 

      return;
    }

    setWeatherData({
      country: data.sys.country,
      city: data.name,
      temp: Math.floor(data.main.temp),
      desc: data.weather[0]?.description,
      icon: data.weather[0]?.icon,
    });

    setTimeout(() => {
      setLoading(false);
    }, 1000); 

  } catch (error) {
    console.log("error in fetching data");

    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }
};
  const handleSearchCity = () => {
    setHasSearched(true);
    searchFunction(cityName);
    setCityName("");
  };
  return (
   <>
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-20"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6366F1] rounded-full blur-[120px] opacity-20"></div>
  </div>

  <WeatherContext.Provider
    value={{ cityName, setCityName, handleSearchCity }}
  >
    <Header />
  </WeatherContext.Provider>

  {loading ? (
   <SkeletonLoading />

  ) : !hasSearched ? (
    
    <HasSearched />

  ) : weatherData ? (
    <WeatherDataContext.Provider
      value={{
        country: weatherData.country,
        city: weatherData.city,
        temp: weatherData.temp,
        desc: weatherData.desc,
        icon: weatherData.icon,
      }}
    >
      <HeroCard />
    </WeatherDataContext.Provider>

  ) : (
   
    <ErrorState />
  )}
</>
  );
};

export default App;
