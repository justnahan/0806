import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import UnifiedNav from '@/components/unified-nav'

export const metadata: Metadata = {
  title: '關於我們 - 溫柔生活研習所',
  description: '了解溫柔生活研習所的品牌理念、創立故事，以及我們對和風生活美學的追求。',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen japanese-gradient">
      {/* Navigation */}
      <UnifiedNav currentPage="about" />

      {/* Main Content */}
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light text-slate-800 mb-4 tracking-wide">
              關於我們
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
              我們是和風生活美學的引導者，致力於在繁忙的都市生活中，
              為每個人創造一方心靈的淨土。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 mb-16">
            <Card className="border-stone-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-light text-slate-800 mb-4">
                  品牌理念
                </CardTitle>
                <CardDescription className="text-slate-600 font-light text-base leading-relaxed max-w-2xl mx-auto">
                  溫柔生活研習所不僅僅是一個學習平台，更是一種生活哲學的體現。
                  我們相信，在不完美中尋找完美，在瞬息中感受永恆。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-3">侘寂美學</h3>
                      <p className="text-slate-600 font-light leading-relaxed">
                        欣賞不完美、不永恆、不完整之美。在歲月的痕跡中發現生命的真諦，
                        在簡樸中體會豐富的內在。
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-3">極簡主義</h3>
                      <p className="text-slate-600 font-light leading-relaxed">
                        減少物質的束縛，增加心靈的自由。通過精簡外在，
                        讓內在的聲音更加清晰響亮。
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-3">自然和諧</h3>
                      <p className="text-slate-600 font-light leading-relaxed">
                        與自然節拍同步，感受季節的轉換，在天地間找到自己的位置，
                        實現人與自然的和諧共生。
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-3">內心平靜</h3>
                      <p className="text-slate-600 font-light leading-relaxed">
                        在喧囂的世界中保持內心的寧靜，通過冥想、茶道、手作等方式，
                        培養專注力和覺察力。
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-light text-slate-800 mb-4 text-center">
                  我們的使命
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg font-light text-slate-700 leading-relaxed italic text-center mb-8">
                  「在快節奏的現代生活中，我們希望成為每個人心靈的避風港。
                  透過課程學習與生活實踐，讓每個人都能找到屬於自己的溫柔生活方式，
                  在簡約中發現豐富，在平靜中體驗深度。」
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-4">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-rose-600 text-lg">🌸</span>
                    </div>
                    <h4 className="font-medium text-slate-800 mb-2">引導探索</h4>
                    <p className="text-sm text-slate-600 font-light">引導每個人探索內在的美好與可能性</p>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 text-lg">🍃</span>
                    </div>
                    <h4 className="font-medium text-slate-800 mb-2">實踐美學</h4>
                    <p className="text-sm text-slate-600 font-light">在日常生活中實踐和風美學與侘寂精神</p>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 text-lg">🧘</span>
                    </div>
                    <h4 className="font-medium text-slate-800 mb-2">內心平衡</h4>
                    <p className="text-sm text-slate-600 font-light">幫助每個人找到內心的平靜與生活的平衡</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-light text-slate-800 mb-4 text-center">
                  加入我們的社群
                </CardTitle>
                <CardDescription className="text-slate-600 font-light text-center">
                  與志同道合的朋友一起，在溫柔的生活實踐中成長
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4 max-w-md mx-auto">
                  <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white">
                    訂閱溫柔生活通訊
                  </Button>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="sm">
                      Instagram
                    </Button>
                    <Button variant="outline" size="sm">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm">
                      聯絡我們
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

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