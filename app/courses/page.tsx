import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: '課程探索 - 溫柔生活研習所',
  description: '探索身心靈課程，學習手作技藝，體驗茶道精神，在學習中找到內心的平靜與成長。',
}

export default function CoursesPage() {
  const courses = [
    {
      title: '茶道入門體驗',
      description: '學習茶道的基本禮儀與精神，在一杯茶中體會禪意生活',
      duration: '2 小時',
      level: '初級',
      category: '文化體驗'
    },
    {
      title: '手作陶藝工坊',
      description: '用雙手感受泥土的溫度，創造屬於自己的生活器具',
      duration: '3 小時',
      level: '初級',
      category: '手作工藝'
    },
    {
      title: '冥想與正念練習',
      description: '學習正念冥想技巧，培養內心的平靜與專注力',
      duration: '1.5 小時',
      level: '適合所有人',
      category: '身心靈'
    },
    {
      title: '極簡生活實踐',
      description: '重新審視生活必需品，學會在簡約中找到豐富',
      duration: '4 小時',
      level: '進階',
      category: '生活哲學'
    }
  ];

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
                <Link href="/today" className="text-slate-600 hover:text-slate-900">今日感受</Link>
                <Link href="/courses" className="text-slate-900 font-medium">課程探索</Link>
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-slate-800 mb-4 tracking-wide">
              課程探索
            </h1>
            <p className="text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
              在學習中找到樂趣，在實踐中獲得成長。每一堂課程都是一次心靈的旅程。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-stone-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-green-200">
                      {course.category}
                    </Badge>
                    <span className="text-sm text-slate-500 font-light">{course.duration}</span>
                  </div>
                  <CardTitle className="text-xl font-normal text-slate-800 leading-relaxed">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 font-light leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-600">
                      <span className="font-light">適合程度：</span>
                      <span className="font-medium">{course.level}</span>
                    </div>
                    <Button 
                      className="bg-rose-200 hover:bg-rose-300 text-rose-800 border-rose-300 rounded-full px-4 py-1 text-sm"
                      variant="outline"
                    >
                      報名課程
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="border-stone-200 bg-white/80 backdrop-blur-sm max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-light text-slate-800">
                  客製化學習計劃
                </CardTitle>
                <CardDescription className="text-slate-600 font-light">
                  根據你的興趣和時間安排，為你量身打造學習路徑
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-slate-800 hover:bg-slate-700 text-white">
                  立即諮詢
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="ghost">
              <Link href="/">返回首頁</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}