import SearchBar from "./SearchBar";
import { Sparkle } from "lucide-react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <>
      {/* Logo */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex items-center lg:justify-between py-5 px-5 flex-wrap gap-5 lg:py-10 lg:px-20 "
      >
        <aside className="flex items-center gap-3">
          <Sparkle className="bg-gradient-to-br from-[#3B82F6] to-[#6366F1] text-white fill-white p-2 rounded-xl w-10 h-10" />
          <span className="text-white text-2xl font-bold hidden lg:block">Skyla</span>
        </aside>
        <SearchBar />
        <div className="w-20 "></div>
      </motion.header>
    </>
  );
};

export default Header;
