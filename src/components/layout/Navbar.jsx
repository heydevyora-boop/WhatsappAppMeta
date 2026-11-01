import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { company, navLinks } from '@/config/site';
import logo from '@/assets/logo.svg';
import Icon from '@/components/ui/Icon';

/**
 * Page titles shown in the mobile header. Routes listed here render the
 * Stitch "document" header variant (back button + document title).
 */
const DOCUMENT_TITLES = {
  '/privacy-policy': 'Privacy Policy',
  '/terms-and-conditions': 'Terms & Conditions',
};

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const documentTitle = DOCUMENT_TITLES[pathname];

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-header">
      <div className="container-page h-16 flex items-center justify-between gap-space-sm">
        {/* Brand / document identity */}
        <div className="flex items-center gap-space-xs min-w-0">
          {documentTitle && (
            <button
              type="button"
              aria-label="Go back"
              onClick={() => navigate(-1)}
              className="md:hidden w-11 h-11 -ml-2 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container-low"
            >
              <Icon name="arrow_back" className="text-[20px]" />
            </button>
          )}

          <Link to="/" className="flex items-center gap-space-sm min-w-0" aria-label={`${company.name} — home`}>
            <img
              src={logo}
              alt={`${company.name} corporate logo`}
              className="h-8 w-auto object-contain flex-shrink-0"
              width="32"
              height="32"
            />
            <span className="flex flex-col min-w-0">
              {documentTitle ? (
                <>
                  <span className="font-label-md text-label-md text-on-surface font-semibold truncate md:hidden">
                    {documentTitle}
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary truncate md:hidden">
                    {company.name}
                  </span>
                </>
              ) : (
                <>
                  <span className="flex items-center gap-1">
                    <span className="font-label-md text-label-md text-on-surface tracking-tight truncate">
                      {company.name}
                    </span>
                    <Icon name="verified" className="text-[14px] text-secondary" />
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant truncate md:hidden">
                    {company.tagline.split('•')[0].trim()}
                  </span>
                </>
              )}
              {/* Desktop keeps a single consistent brand lockup */}
              {documentTitle && (
                <span className="hidden md:flex items-center gap-1">
                  <span className="font-label-md text-label-md text-on-surface tracking-tight">
                    {company.name}
                  </span>
                  <Icon name="verified" className="text-[14px] text-secondary" />
                </span>
              )}
            </span>
          </Link>
        </div>

        {/* Desktop / tablet navigation */}
        <nav className="hidden md:flex items-center gap-space-md" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                [
                  'font-label-lg text-label-lg px-1 py-1 transition-colors border-b-2',
                  isActive
                    ? 'text-secondary border-secondary'
                    : 'text-on-surface-variant border-transparent hover:text-on-surface',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm flex-shrink-0">
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-secondary text-on-secondary px-4 py-2 rounded-lg shadow-sm font-label-lg text-label-lg hover:opacity-95 transition-all"
          >
            <span>Contact Team</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
          <span
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <Icon name="person" className="text-on-primary text-[18px]" />
          </span>
        </div>
      </div>
    </header>
  );
}
