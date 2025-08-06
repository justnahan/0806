import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

function NavigationItem({ href, children, className = '', isActive = false }: NavigationItemProps) {
  const baseClasses = "text-slate-600 hover:text-slate-900 transition-colors duration-200 text-sm font-light tracking-wide";
  const activeClasses = isActive ? "text-slate-900 font-medium" : "";
  const hoverClasses = className || "hover:text-green-600 hover:bg-green-50 px-3 py-1 rounded-full";
  
  return (
    <Link 
      href={href as any} 
      className={`${baseClasses} ${activeClasses} ${!isActive ? hoverClasses : 'px-3 py-1 rounded-full bg-green-100 text-green-700'}`}
    >
      {children}
    </Link>
  );
}

interface UnifiedNavProps {
  currentPage?: 'home' | 'today' | 'courses' | 'products' | 'profile' | 'about';
}

export default function UnifiedNav({ currentPage }: UnifiedNavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-stone-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-light text-slate-800 tracking-wide hover:text-orange-600 transition-colors duration-300">
              溫柔生活研習所
              <span className="ml-2 text-sm text-orange-500">和</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <NavigationItem 
                href="/today" 
                className="hover:text-green-600 hover:bg-green-50 px-3 py-1 rounded-full"
                isActive={currentPage === 'today'}
              >
                今日感受
              </NavigationItem>
              <NavigationItem 
                href="/courses" 
                className="hover:text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-full"
                isActive={currentPage === 'courses'}
              >
                課程探索
              </NavigationItem>
              <NavigationItem 
                href="/products" 
                className="hover:text-purple-600 hover:bg-purple-50 px-3 py-1 rounded-full"
                isActive={currentPage === 'products'}
              >
                生活選物
              </NavigationItem>
              <NavigationItem 
                href="/profile" 
                className="hover:text-pink-600 hover:bg-pink-50 px-3 py-1 rounded-full"
                isActive={currentPage === 'profile'}
              >
                我的空間
              </NavigationItem>
              <NavigationItem 
                href="/about" 
                className="hover:text-yellow-600 hover:bg-yellow-50 px-3 py-1 rounded-full"
                isActive={currentPage === 'about'}
              >
                關於我們
              </NavigationItem>
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
  );
}