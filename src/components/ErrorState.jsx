import { CloudOff, RotateCw } from 'lucide-react'
import {motion} from 'motion/react'
const ErrorState = () => {
  return (
    <>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, x: [0, -10, 10, -10, 10, 0] }}
        transition={{
          opacity: { duration: 0.3 },
          scale: { duration: 0.3 },
          x: { duration: 0.5, delay: 0.1 },
        }}
        className="flex flex-col items-center justify-center gap-6 p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl"
      >
        {/* Error Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full"></div>
          <div className="relative p-6 rounded-full bg-red-500/10 border border-red-500/30">
            <CloudOff className="w-16 h-16 text-red-400" />
          </div>
        </div>

        {/* Error Message */}
        <div className="text-center space-y-2">
          <h2 className="text-white text-3xl font-bold">City not found</h2>
          <p className="text-white/60 text-lg">
            We couldn't find weather data for that location. Please try again.
          </p>
        </div>

        {/* Retry Button */}
        <motion.button
        //   onClick={handleSearchCity}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-semibold hover:shadow-lg hover:shadow-[#3B82F6]/30 transition-shadow"
        >
          <RotateCw className="w-5 h-5" />
          Try Again
        </motion.button>
      </motion.div>
    </div>
    </>
  )
}

export default ErrorState