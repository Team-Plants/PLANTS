import { useEffect } from 'react';

interface Props {
  fetchCallback: () => void;
  target: HTMLDivElement | null;
  props?: undefined;
}

function useIntersectionObserver({ target, fetchCallback, props }: Props) {
  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      const onIntersect: IntersectionObserverCallback = async (
        [entry],
        observer,
      ) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          await fetchCallback();
        } else {
          observer.observe(target);
        }
      };
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }
  }, [target, props ,fetchCallback]);
}

export default useIntersectionObserver;
