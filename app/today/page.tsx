import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import UnifiedNav from '@/components/unified-nav'

export const metadata: Metadata = {
  title: '今日感受 - 溫柔生活研習所',
  description: '探索當下的內心感受，找到適合今日心境的生活方式與實踐。',
}

export default function TodayPage() {
  return (
    <div className="min-h-screen japanese-gradient">
      {/* Navigation */}
      <UnifiedNav currentPage="today" />

      {/* Main Content */}
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-slate-800 mb-4 tracking-wide">
              今日感受
            </h1>
            <p className="text-slate-600 font-light leading-relaxed">
              靜下心來，感受此刻的自己。讓我們一起探索內心的聲音。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="warm-card enhanced-shadow border-stone-200 backdrop-blur-sm overflow-hidden">
              <CardHeader className="relative">
                <div className="absolute top-2 right-2 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-200">
                  最近熱門
                </div>
                <CardTitle className="text-xl font-light text-slate-800">
                  心境探索
                </CardTitle>
                <CardDescription className="text-slate-600 font-light">
                  根據當下的心情，為你推薦合適的生活實踐
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { mood: '需要平靜', activity: '冥想與呼吸練習', count: '12項相關內容', color: 'hover:bg-blue-50 hover:border-l-4 hover:border-l-blue-300' },
                    { mood: '渴望創造', activity: '手作工藝課程', count: '8項相關內容', color: 'hover:bg-purple-50 hover:border-l-4 hover:border-l-purple-300' },
                    { mood: '尋求溫暖', activity: '茶道體驗', count: '15項相關內容', color: 'hover:bg-orange-50 hover:border-l-4 hover:border-l-orange-300' },
                    { mood: '想要簡化', activity: '極簡生活指南', count: '20項相關內容', color: 'hover:bg-green-50 hover:border-l-4 hover:border-l-green-300' }
                  ].map((item, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      className={`w-full justify-start h-auto p-4 text-left transition-all duration-300 transform hover:scale-102 ${item.color}`}
                    >
                      <div className="w-full">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-slate-800">{item.mood}</div>
                          <div className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">{item.count}</div>
                        </div>
                        <div className="text-sm text-slate-600 font-light mt-1">{item.activity}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="warm-card enhanced-shadow border-stone-200 backdrop-blur-sm overflow-hidden relative">
              <div className="absolute inset-0 opacity-5">
                <svg className="absolute top-4 right-4 w-16 h-16 text-orange-300" fill="currentColor" viewBox="0 0 100 100">
                  <path d="M50,10 Q70,30 50,50 Q30,30 50,10 Z" />
                </svg>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-pink-300 rounded-full opacity-30"></div>
              </div>
              <CardHeader className="relative">
                <div className="absolute top-2 right-2 text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full border border-orange-200">
                  季節推薦
                </div>
                <CardTitle className="text-xl font-light text-slate-800">
                  每日靈感
                </CardTitle>
                <CardDescription className="text-slate-600 font-light">
                  來自生活的溫柔提醒
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="mb-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-orange-100">
                  <div className="text-xs text-orange-600 mb-2 font-medium">今日小日曆</div>
                  <div className="text-sm text-orange-800">
                    2025年8月6日 · 立秋將至 · 宜靜心 · 宜品茶
                  </div>
                </div>
                <blockquote className="text-lg font-light text-slate-700 leading-relaxed italic mb-4 relative p-4 bg-white/60 rounded-lg border border-stone-100">
                  <div className="absolute -top-1 -left-1 text-2xl text-orange-300 opacity-50">&ldquo;</div>
                  慢下來，不是為了停滯，而是為了更好地前行。
                  在匆忙的世界中，保持內心的寧靜是一種勇氣。
                  <div className="absolute -bottom-1 -right-1 text-2xl text-orange-300 opacity-50 rotate-180">&rdquo;</div>
                </blockquote>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 font-light">
                  <div className="w-4 h-px bg-stone-300"></div>
                  今日生活哲學
                  <div className="w-4 h-px bg-stone-300"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-gradient-to-r from-rose-200 to-pink-200 hover:from-orange-300 hover:to-yellow-300 text-rose-800 hover:text-orange-800 border-rose-300 hover:border-orange-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <Link href="/" className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                返回首頁
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}