import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { supabase, generateRefLink, Product } from '@/lib/supabase'

export const metadata: Metadata = {
  title: '溫柔生活研習所 - 和風生活美學引導者',
  description: '探索簡約美學與內心平靜，在侘寂美學中找到生活的真諦。結合身心靈課程與生活美學商品的療癒電商平台。',
  keywords: '侘寂美學, 極簡主義, 日式生活, 生活美學, 課程, 手作, 茶道',
  openGraph: {
    title: '溫柔生活研習所 - 和風生活美學引導者',
    description: '探索簡約美學與內心平靜，在侘寂美學中找到生活的真諦',
    type: 'website',
  }
}

interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavigationItem({ href, children, className = '' }: NavigationItemProps) {
  return (
    <Link 
      href={href as any} 
      className={`text-slate-600 hover:text-slate-900 transition-colors duration-200 text-sm font-light tracking-wide ${className}`}
    >
      {children}
    </Link>
  );
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const refCode = process.env.REF_CODE || 'DEFAULT';
  const buyLink = generateRefLink(product, refCode);
  const priceInDollars = (product.price_in_cents / 100).toFixed(2);

  return (
    <Card className="group warm-card enhanced-shadow hover:-translate-y-2 transition-all duration-500 ease-out border-stone-200 backdrop-blur-sm overflow-hidden">
      <CardHeader className="p-4 relative">
        {product.image_url && (
          <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gradient-to-br from-stone-50 to-stone-100 relative">
            <img 
              src={product.image_url} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        )}
        <CardTitle className="text-lg font-normal text-slate-800 leading-relaxed group-hover:persimmon-orange transition-colors duration-300">
          {product.name}
        </CardTitle>
        <CardDescription className="text-sm text-slate-600 font-light">
          <Badge variant="secondary" className="text-xs bg-gradient-to-r from-green-100 to-green-50 text-green-700 border-green-200 hover:from-green-200 hover:to-green-100 transition-all duration-300">
            療癒生活
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
            ${priceInDollars}
          </span>
          <Button 
            asChild
            className="bg-gradient-to-r from-rose-200 to-pink-200 hover:from-orange-300 hover:to-yellow-300 text-rose-800 hover:text-orange-800 border-rose-300 hover:border-orange-300 rounded-full px-6 py-2 text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            variant="outline"
          >
            <a href={buyLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <span>探索</span>
              <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

async function getProducts() {
  const productIds = ['PROD_UF001', 'PROD_UF002'];
  
  if (!supabase) {
    return [];
  }
  
  const { data: products } = await supabase
    .from('products')
    .select('*, merchant:merchants(*)')
    .in('id', productIds);

  return products || [];
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="min-h-screen japanese-gradient">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-stone-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-light text-slate-800 tracking-wide hover:text-orange-600 transition-colors duration-300">
                溫柔生活研習所
                <span className="ml-2 text-sm text-orange-500">和</span>
              </Link>
              <div className="hidden md:flex space-x-6">
                <NavigationItem href="/today" className="hover:text-green-600 hover:bg-green-50 px-3 py-1 rounded-full">今日感受</NavigationItem>
                <NavigationItem href="/courses" className="hover:text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-full">課程探索</NavigationItem>
                <NavigationItem href="/products" className="hover:text-purple-600 hover:bg-purple-50 px-3 py-1 rounded-full">生活選物</NavigationItem>
                <NavigationItem href="/profile" className="hover:text-pink-600 hover:bg-pink-50 px-3 py-1 rounded-full">我的空間</NavigationItem>
                <NavigationItem href="/about" className="hover:text-yellow-600 hover:bg-yellow-50 px-3 py-1 rounded-full">關於我們</NavigationItem>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 hover:bg-stone-100 transition-all duration-200">
                搜索
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 hover:bg-stone-100 transition-all duration-200">
                會員
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Loading Animation Elements */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Floating sakura petals from loading page */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-3 h-3 bg-pink-300 rounded-full opacity-40 animate-bounce absolute top-20 left-1/4" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
          <div className="w-2 h-2 bg-orange-300 rounded-full opacity-30 animate-bounce absolute top-32 right-1/3" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
          <div className="w-2 h-2 bg-green-300 rounded-full opacity-35 animate-bounce absolute bottom-40 left-1/3" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
          <div className="w-3 h-3 bg-yellow-300 rounded-full opacity-25 animate-bounce absolute bottom-20 right-1/4" style={{ animationDelay: '3s', animationDuration: '4.5s' }}></div>
          <div className="w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-bounce absolute top-1/2 left-10" style={{ animationDelay: '1.5s', animationDuration: '5.5s' }}></div>
          <div className="w-3 h-3 bg-blue-300 rounded-full opacity-20 animate-bounce absolute top-1/3 right-10" style={{ animationDelay: '2.5s', animationDuration: '4.2s' }}></div>
        </div>

        {/* Decorative SVG elements from loading page */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-16 left-16 w-16 h-16 text-green-200 opacity-15 animate-pulse" fill="currentColor" viewBox="0 0 100 100" style={{ animationDuration: '6s' }}>
            <path d="M50,10 Q70,30 50,50 Q30,30 50,10 Z" />
          </svg>
          <svg className="absolute bottom-24 right-16 w-12 h-12 text-pink-200 opacity-20 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100" style={{ animationDuration: '7s' }}>
            <circle cx="50" cy="50" r="40" strokeDasharray="5,5" />
          </svg>
          <svg className="absolute top-1/2 left-20 w-10 h-10 text-orange-200 opacity-25 animate-pulse" fill="currentColor" viewBox="0 0 100 100" style={{ animationDuration: '5s' }}>
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Central zen circle inspired by loading animation */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 border-2 border-orange-300 rounded-full animate-pulse flex items-center justify-center opacity-60" style={{ animationDuration: '4s' }}>
              <div className="w-10 h-10 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-slate-800 leading-relaxed mb-8 tracking-wide">
            今日，你想要...
          </h1>
          
          {/* Seasonal indicator from loading page */}
          <div className="inline-block mb-8 text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 animate-pulse" style={{ animationDuration: '3s' }}>
            夏の候 - 夏日時光
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { text: '尋找內心平靜', color: 'hover:bg-green-50 hover:border-green-300 hover:text-green-700' },
              { text: '感受自然之美', color: 'hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700' },
              { text: '學習手作技藝', color: 'hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700' },
              { text: '體驗茶道精神', color: 'hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700' },
              { text: '探索簡約生活', color: 'hover:bg-pink-50 hover:border-pink-300 hover:text-pink-700' }
            ].map((item, index) => (
              <Button 
                key={index}
                variant="outline" 
                className={`h-12 text-sm font-light border-stone-300 transition-all duration-300 transform hover:scale-105 hover:shadow-md ${item.color}`}
              >
                <span className="relative">
                  {item.text}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-800 mb-4 tracking-wide">
              精選生活選物
            </h2>
            <p className="text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
              每一件物品都承載著對美好生活的嚮往，在簡約中尋找豐富，在平靜中體驗深度。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section with Enhanced Loading Animation Elements */}
      <section className="py-16 px-6 washi-bg relative overflow-hidden">
        {/* Enhanced animated background from loading page */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-10 left-10 w-20 h-20 text-orange-300 animate-pulse" fill="currentColor" viewBox="0 0 100 100" style={{ animationDuration: '5s' }}>
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
          <svg className="absolute bottom-10 right-10 w-16 h-16 text-green-300 rotate-45 animate-pulse" fill="currentColor" viewBox="0 0 100 100" style={{ animationDuration: '6s' }}>
            <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          
          {/* Additional floating elements from loading animation */}
          <div className="w-2 h-2 bg-pink-300 rounded-full opacity-30 animate-bounce absolute top-1/3 right-1/4" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
          <div className="w-3 h-3 bg-blue-300 rounded-full opacity-20 animate-bounce absolute bottom-1/3 left-1/4" style={{ animationDelay: '1.2s', animationDuration: '4s' }}></div>
          <div className="w-2 h-2 bg-yellow-300 rounded-full opacity-25 animate-bounce absolute top-1/2 left-1/2" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
          <div className="w-3 h-3 bg-green-300 rounded-full opacity-15 animate-bounce absolute top-20 right-20" style={{ animationDelay: '0.8s', animationDuration: '4.2s' }}></div>
          
          {/* Zen circle elements from loading */}
          <div className="absolute top-1/4 left-1/3 w-12 h-12 border border-orange-200 rounded-full animate-pulse" style={{ animationDuration: '4s' }}>
            <div className="w-4 h-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full m-4 animate-spin" style={{ animationDuration: '6s' }}></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-block mb-4 text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 animate-pulse" style={{ animationDuration: '3s' }}>
            夏の候 - 夏日時光
          </div>
          <h3 className="text-2xl font-light text-slate-800 mb-8 tracking-wide">
            生活哲學分享
          </h3>
          <div className="relative inline-block">
            <blockquote className="text-lg font-light text-slate-700 leading-relaxed italic mb-6 relative p-6 bg-white/60 rounded-lg backdrop-blur-sm border border-stone-200">
              <div className="absolute -top-2 -left-2 text-4xl text-orange-300 opacity-50">&ldquo;</div>
              在不完美中尋找完美，在瞬息中感受永恆。
              <br />真正的美不在於華麗，而在於內心的寧靜與和諧。
              <div className="absolute -bottom-2 -right-2 text-4xl text-orange-300 opacity-50 rotate-180">&rdquo;</div>
            </blockquote>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-px bg-stone-300"></div>
            <p className="text-sm text-slate-500 font-light px-2">
              侘寂美學的生活實踐
            </p>
            <div className="w-8 h-px bg-stone-300"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-lg font-light text-slate-800 mb-4 tracking-wide">
                溫柔生活研習所
              </h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                在這裡，我們一起探索簡約美學，
                <br />實踐內心平靜的生活方式。
              </p>
            </div>
            <div>
              <h5 className="text-sm font-medium text-slate-800 mb-4 tracking-wide">
                聯繫我們
              </h5>
              <p className="text-sm text-slate-600 font-light">
                加入溫柔生活通訊
              </p>
            </div>
            <div>
              <h5 className="text-sm font-medium text-slate-800 mb-4 tracking-wide">
                社群連結
              </h5>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link href="#" className="text-sm text-slate-600 hover:text-slate-900 font-light">
                  Instagram
                </Link>
                <Link href="#" className="text-sm text-slate-600 hover:text-slate-900 font-light">
                  Facebook
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-200 mt-8 pt-8 text-center">
            <p className="text-xs text-slate-500 font-light">
              「今日亦是美好的一天」
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
