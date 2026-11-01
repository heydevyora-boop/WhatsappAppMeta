import { NavLink } from 'react-router-dom';
import { navLinks } from '@/config/site';
import Icon from '@/components/ui/Icon';

/** Mobile tab bar from the Stitch shell. Hidden from tablet width upward. */
export default function BottomNav() {
  return (
    <nav
      aria-label="Mobile"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-header"
    >
      <div className="h-16 px-gutter-mobile flex items-center justify-around">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) =>
              [
                'flex flex-col items-center justify-center w-14 h-11 transition-colors',
                isActive ? 'text-secondary' : 'text-on-surface-variant hover:text-on-surface',
              ].join(' ')
            }
          >
            <Icon name={link.icon} className="text-[22px]" />
            <span className="font-label-sm text-label-sm mt-0.5">{link.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
