export default function Loading() {
  return (
    <div className="min-h-screen japanese-gradient flex items-center justify-center">
      <div className="text-center relative">
        {/* Japanese-inspired loading animation */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Floating sakura petals */}
          <div className="absolute inset-0">
            <div className="w-3 h-3 bg-pink-300 rounded-full opacity-60 animate-bounce absolute top-2 left-4" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
            <div className="w-2 h-2 bg-orange-300 rounded-full opacity-40 animate-bounce absolute top-8 right-2" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
            <div className="w-2 h-2 bg-green-300 rounded-full opacity-50 animate-bounce absolute bottom-4 left-8" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
            <div className="w-3 h-3 bg-yellow-300 rounded-full opacity-30 animate-bounce absolute bottom-8 right-6" style={{ animationDelay: '1.5s', animationDuration: '2.2s' }}></div>
          </div>
          
          {/* Central zen circle */}
          <div className="w-16 h-16 border-2 border-orange-300 rounded-full mx-auto animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
          </div>
        </div>
        
        <div className="space-y-3">
          <h2 className="text-xl font-light text-slate-800 tracking-wide">
            正在為您準備今日的美好體驗
          </h2>
          <p className="text-sm text-slate-600 font-light">
            靜待片刻，讓心緒沉澱...
          </p>
          
          {/* Seasonal indicator */}
          <div className="inline-block mt-4 text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            夏の候 - 夏日時光
          </div>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-20 left-20 w-12 h-12 text-green-200 opacity-20 animate-pulse" fill="currentColor" viewBox="0 0 100 100" style={{ animationDuration: '4s' }}>
            <path d="M50,10 Q70,30 50,50 Q30,30 50,10 Z" />
          </svg>
          <svg className="absolute bottom-20 right-20 w-8 h-8 text-pink-200 opacity-30 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100" style={{ animationDuration: '5s' }}>
            <circle cx="50" cy="50" r="40" strokeDasharray="5,5" />
          </svg>
        </div>
      </div>
    </div>
  );
}