import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: '我的空間 - 溫柔生活研習所',
  description: '個人專屬的學習與成長空間，記錄你的生活實踐歷程。',
}

export default function ProfilePage() {
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
                <Link href="/courses" className="text-slate-600 hover:text-slate-900">課程探索</Link>
                <Link href="/products" className="text-slate-600 hover:text-slate-900">生活選物</Link>
                <Link href="/profile" className="text-slate-900 font-medium">我的空間</Link>
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
              我的空間
            </h1>
            <p className="text-slate-600 font-light leading-relaxed">
              這裡是屬於你的私人花園，記錄成長的足跡，收藏美好的時光。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-stone-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-light text-slate-800">
                  學習歷程
                </CardTitle>
                <CardDescription className="text-slate-600 font-light">
                  你的課程學習記錄與成長軌跡
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                    <div>
                      <div className="font-medium text-slate-800 text-sm">茶道入門體驗</div>
                      <div className="text-xs text-slate-600 font-light">2024/01/15 完成</div>
                    </div>
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                      已完成
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                    <div>
                      <div className="font-medium text-slate-800 text-sm">冥想與正念練習</div>
                      <div className="text-xs text-slate-600 font-light">進行中</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      80% 完成
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-light text-slate-800">
                  收藏清單
                </CardTitle>
                <CardDescription className="text-slate-600 font-light">
                  你感興趣的課程與商品
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-stone-50 rounded-lg">
                    <div className="font-medium text-slate-800 text-sm mb-1">手作陶藝工坊</div>
                    <div className="text-xs text-slate-600 font-light">已加入心願清單</div>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg">
                    <div className="font-medium text-slate-800 text-sm mb-1">生活選物商品</div>
                    <div className="text-xs text-slate-600 font-light">2 件商品收藏中</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-stone-200 bg-white/80 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-light text-slate-800">
                生活日記
              </CardTitle>
              <CardDescription className="text-slate-600 font-light">
                記錄你的學習心得與生活感悟
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-2 border-rose-200 pl-4">
                  <div className="text-sm text-slate-500 font-light mb-2">2024/01/20</div>
                  <p className="text-slate-700 font-light leading-relaxed">
                    「今天的茶道練習讓我深深感受到『慢』的力量。每一個動作都變得有意義，
                    每一口茶都承載著當下的寧靜。生活原來可以如此美好。」
                  </p>
                </div>
                <div className="border-l-2 border-green-200 pl-4">
                  <div className="text-sm text-slate-500 font-light mb-2">2024/01/18</div>
                  <p className="text-slate-700 font-light leading-relaxed">
                    「開始實踐極簡生活的第三天，發現當周圍的物品減少時，
                    心靈的空間反而變得更加豐富。這就是侘寂美學的真諦吧。」
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  寫下今日感悟
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button asChild variant="ghost">
              <Link href="/">返回首頁</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}