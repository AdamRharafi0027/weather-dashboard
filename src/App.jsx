import Header from "./components/Header/Header"
import HeroCard from "./components/HeroCard/HeroCard"

const App = () => {
  return (
   <>
     <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6366F1] rounded-full blur-[120px] opacity-20"></div>
      </div>
      <Header/>
      <HeroCard />
   </>
  )
}

export default App