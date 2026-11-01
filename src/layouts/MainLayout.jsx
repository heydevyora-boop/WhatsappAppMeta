import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import BottomNav from '@/components/layout/BottomNav';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

/**
 * Shared chrome for every page: fixed header, scrollable content,
 * footer, and the mobile-only bottom tab bar.
 */
export default function MainLayout() {
  return (
    <div className="bg-surface text-on-surface flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 flex flex-col w-full pt-16">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
