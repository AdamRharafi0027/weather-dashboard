import { Droplets, Wind, Eye, Thermometer } from "lucide-react";
const HeroCard = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border-white/15 border rounded-2xl text-white w-90 m-auto p-10 lg:w-300 ">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#3B82F6] rounded-full blur-3xl opacity-20"></div>
        <header>
          <h3 className="text-gray-400">MA</h3>
          <h1 className="text-5xl font-bold">Agadir</h1>
        </header>
        <main className="flex lg:items-center lg:justify-between flex-wrap my-10  gap-5 lg:gap-0">
          <aside className="flex items-center ">
            <h1 className="text-9xl lg:text-[10rem] font-bold">28</h1>
            <span className="text-4xl text-gray-400 text-7xl">°C</span>
          </aside>
          <aside className="flex flex-col text-center gap-2 lg:gap-5">
            <span className="text-7xl lg:text-9xl">🌧️</span>
            <span className="text-3xl">Rainy</span>
          </aside>
        </main>
        <footer className="flex items-center justify-between flex-wrap "> 
            <div className="bg-white/10  border-white/10 border rounded-xl py-2 px-5 lg:w-65 flex items-center gap-3 mb-5 lg:mb-0">
                <Droplets className="text-cyan-500" />
                <aside className="flex flex-col items">
                    <span className="text-gray-400 text-[12px]">Feels Like</span>
                    <aside className="font-bold">
                        13 <span>°C</span>
                    </aside>
                </aside>
            </div>
            <div className="bg-white/10  border-white/10 border rounded-xl py-2 px-5 lg:w-65 flex items-center gap-3 mb-5 lg:mb-0">
                <Droplets className="text-cyan-500" />
                <aside className="flex flex-col items">
                    <span className="text-gray-400 text-[12px]">Feels Like</span>
                    <aside className="font-bold">
                        13 <span>°C</span>
                    </aside>
                </aside>
            </div>
            <div className="bg-white/10  border-white/10 border rounded-xl py-2 px-5 lg:w-65 flex items-center gap-3 mb-5 lg:mb-0">
                <Droplets className="text-cyan-500" />
                <aside className="flex flex-col items">
                    <span className="text-gray-400 text-[12px]">Feels Like</span>
                    <aside className="font-bold">
                        13 <span>°C</span>
                    </aside>
                </aside>
            </div>
            <div className="bg-white/10  border-white/10 border rounded-xl py-2 px-5 lg:w-65 flex items-center gap-3 mb-5 lg:mb-0">
                <Droplets className="text-cyan-500" />
                <aside className="flex flex-col items">
                    <span className="text-gray-400 text-[12px]">Feels Like</span>
                    <aside className="font-bold">
                        13 <span>°C</span>
                    </aside>
                </aside>
            </div>
           
        </footer>
      </section>
    </>
  );
};

export default HeroCard;
