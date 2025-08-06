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
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-stone-200 bg-white/80 backdrop-blur-sm">
      <CardHeader className="p-4">
        {product.image_url && (
          <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-stone-50">
            <img 
              src={product.image_url} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardTitle className="text-lg font-normal text-slate-800 leading-relaxed">
          {product.name}
        </CardTitle>
        <CardDescription className="text-sm text-slate-600 font-light">
          <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-green-200">
            療癒生活
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-slate-900">
            ${priceInDollars}
          </span>
          <Button 
            asChild
            className="bg-rose-200 hover:bg-rose-300 text-rose-800 border-rose-300 rounded-full px-4 py-1 text-sm transition-all duration-200"
            variant="outline"
          >
            <a href={buyLink} target="_blank" rel="noopener noreferrer">
              探索
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
                <NavigationItem href="/today">今日感受</NavigationItem>
                <NavigationItem href="/courses">課程探索</NavigationItem>
                <NavigationItem href="/products">生活選物</NavigationItem>
                <NavigationItem href="/profile">我的空間</NavigationItem>
                <NavigationItem href="/about">關於我們</NavigationItem>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                搜索
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                會員
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 leading-relaxed mb-8 tracking-wide">
            今日，你想要...
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            {[
              '尋找內心平靜',
              '感受自然之美',
              '學習手作技藝',
              '體驗茶道精神',
              '探索簡約生活'
            ].map((item, index) => (
              <Button 
                key={index}
                variant="outline" 
                className="h-12 text-sm font-light border-stone-300 hover:bg-stone-100 hover:border-stone-400 transition-all duration-200"
              >
                {item}
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

      {/* Philosophy Section */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-light text-slate-800 mb-8 tracking-wide">
            生活哲學分享
          </h3>
          <blockquote className="text-lg font-light text-slate-700 leading-relaxed italic mb-6">
            「在不完美中尋找完美，在瞬息中感受永恆。
            <br />真正的美不在於華麗，而在於內心的寧靜與和諧。」
          </blockquote>
          <p className="text-sm text-slate-500 font-light">
            — 侘寂美學的生活實踐
          </p>
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
