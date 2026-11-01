import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import usePageTitle from '@/hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Page Not Found — Devyora');

  return (
    <section className="container-doc py-space-xl flex flex-col items-center text-center gap-space-md min-h-[50vh] justify-center">
      <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary">
        <Icon name="travel_explore" className="text-[26px]" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">
          Page Not Found
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          The record you requested is unavailable or has been relocated.
        </p>
      </div>
      <Button to="/" icon="arrow_back">
        Return to Homepage
      </Button>
    </section>
  );
}
