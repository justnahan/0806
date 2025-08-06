import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '今日感受 - 溫柔生活研習所',
  description: '探索當下的內心感受，找到適合今日心境的生活方式與實踐。',
}

export default function TodayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-light text-slate-800 tracking-wide">
                溫柔生活研習所
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/today" className="text-slate-900 font-medium">今日感受</Link>
                <Link href="/courses" className="text-slate-600 hover:text-slate-900">課程探索</Link>
                <Link href="/products" className="text-slate-600 hover:text-slate-900">生活選物</Link>
                <Link href="/profile" className="text-slate-600 hover:text-slate-900">我的空間</Link>
                <Link href="/about" className="text-slate-600 hover:text-slate-900">關於我們</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

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
            <Card className="border-stone-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
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
                    { mood: '需要平靜', activity: '冥想與呼吸練習' },
                    { mood: '渴望創造', activity: '手作工藝課程' },
                    { mood: '尋求溫暖', activity: '茶道體驗' },
                    { mood: '想要簡化', activity: '極簡生活指南' }
                  ].map((item, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      className="w-full justify-start h-auto p-4 text-left hover:bg-stone-100"
                    >
                      <div>
                        <div className="font-medium text-slate-800">{item.mood}</div>
                        <div className="text-sm text-slate-600 font-light">{item.activity}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-light text-slate-800">
                  每日靈感
                </CardTitle>
                <CardDescription className="text-slate-600 font-light">
                  來自生活的溫柔提醒
                </CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg font-light text-slate-700 leading-relaxed italic mb-4">
                  「慢下來，不是為了停滯，而是為了更好地前行。
                  在匆忙的世界中，保持內心的寧靜是一種勇氣。」
                </blockquote>
                <p className="text-sm text-slate-500 font-light">
                  — 今日生活哲學
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-rose-200 hover:bg-rose-300 text-rose-800 border-rose-300">
              <Link href="/">返回首頁</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}