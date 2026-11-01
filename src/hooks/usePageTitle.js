import { useEffect } from 'react';

/** Keeps `document.title` in sync with the active route. */
export default function usePageTitle(title) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
}
