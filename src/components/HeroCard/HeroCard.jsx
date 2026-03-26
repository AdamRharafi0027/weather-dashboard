import { Droplets, Wind, Eye, Thermometer } from "lucide-react";
import { useContext } from "react";
import { WeatherDataContext } from "../../context/Context";

const HeroCard =  () => {
  
const {
  country,
  city,
  temp,
  desc,
  icon
} =  useContext(WeatherDataContext);
  const weatherState = [
    {
      title: "Feels Like",
      degree: `${13}°C`,
      icon: <Thermometer className="text-cyan-500" />,
    },
    {
      title: "Humidity",
      degree: `${13}%`,
      icon: <Droplets className="text-cyan-500" />,
    },
    {
      title: "Wind speed",
      degree: `${13} km/h`,
      icon: <Wind className="text-cyan-500" />,
    },
    {
      title: "Visibility",
      degree: `${13} km`,
      icon: <Eye className="text-cyan-500" />,
    },
  ];
  return (
    <>
      <section className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border-white/15 border rounded-2xl text-white w-90 m-auto p-10 lg:w-300 ">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#3B82F6] rounded-full blur-3xl opacity-20"></div>
        <header>
          <h3 className="text-gray-400">{country}</h3>
          <h1 className="text-5xl font-bold">{city}</h1>
        </header>
        <main className="flex lg:items-center lg:justify-between flex-wrap my-10 px-20 gap-5 lg:gap-0">
          <aside className="flex items-center ">
            <h1 className="text-9xl lg:text-[10rem] font-bold">{temp}</h1>
            <span className="text-4xl text-gray-400 text-7xl">°C</span>
          </aside>
          <aside className="flex flex-col text-center gap-2 lg:gap-5">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="Weather icon"
              className="w-24 h-24 mx-auto mb-2 scale-200"
            />
            <span >{desc}</span>
          </aside>
        </main>
        <footer className="flex items-center justify-between flex-wrap ">
          {weatherState.map(({ title, degree, icon }, index) => (
            <div key={index} className="bg-white/10  border-white/10 border rounded-xl py-2 px-5 lg:w-65 flex items-center gap-3 mb-5 lg:mb-0">
              {icon}
              <aside className="flex flex-col items">
                <span className="text-gray-400 text-[12px]">{title}</span>
                <aside className="font-bold">{degree}</aside>
              </aside>
            </div>
          ))}
        </footer>
      </section>
    </>
  );
};

export default HeroCard;
