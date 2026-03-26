
const SkeletonLoading = () => {
  return (
    <>
     <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
          {/* Hero Card Skeleton */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl p-8 h-[400px]">
            <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="space-y-6">
              <div className="h-8 w-48 bg-white/10 rounded-lg"></div>
              <div className="h-16 w-64 bg-white/10 rounded-lg"></div>
              <div className="h-32 w-80 bg-white/10 rounded-2xl"></div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-20 bg-white/10 rounded-2xl"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SkeletonLoading