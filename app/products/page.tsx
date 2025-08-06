import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { supabase, generateRefLink, Product } from '@/lib/supabase'
import UnifiedNav from '@/components/unified-nav'

export const metadata: Metadata = {
  title: '生活選物 - 溫柔生活研習所',
  description: '精心挑選的生活美學商品，每一件物品都承載著對美好生活的嚮往。',
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
      <CardHeader className="p-6">
        {product.image_url && (
          <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-stone-50">
            <img 
              src={product.image_url} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardTitle className="text-xl font-normal text-slate-800 leading-relaxed">
          {product.name}
        </CardTitle>
        <CardDescription className="text-sm text-slate-600 font-light">
          <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-green-200 mb-2">
            精選好物
          </Badge>
          <p className="leading-relaxed">
            精心挑選的生活美學商品，為你的日常增添溫暖與質感。
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-light text-slate-900">
            ${priceInDollars}
          </span>
          <Button 
            asChild
            className="bg-rose-200 hover:bg-rose-300 text-rose-800 border-rose-300 rounded-full px-6 py-2 transition-all duration-200"
            variant="outline"
          >
            <a href={buyLink} target="_blank" rel="noopener noreferrer">
              立即購買
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

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen japanese-gradient">
      {/* Navigation */}
      <UnifiedNav currentPage="products" />

      {/* Main Content */}
      <main className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-slate-800 mb-4 tracking-wide">
              生活選物
            </h1>
            <p className="text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
              每一件物品都經過精心挑選，承載著對美好生活的嚮往。
              在簡約中尋找豐富，在平靜中體驗深度。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 font-light">
                商品正在準備中，請稍後再來探索...
              </p>
            </div>
          )}

          <div className="text-center mt-16">
            <Card className="border-stone-200 bg-white/80 backdrop-blur-sm max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-light text-slate-800">
                  生活哲學
                </CardTitle>
                <CardDescription className="text-slate-600 font-light leading-relaxed">
                  「物品不在多，而在於它們是否能為生活帶來真正的喜悅和意義。
                  選擇那些能夠陪伴你走向更好自己的美好事物。」
                </CardDescription>
              </CardHeader>
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