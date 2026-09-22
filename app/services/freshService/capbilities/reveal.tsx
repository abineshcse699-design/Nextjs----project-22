"use client";

// app/services/freshService/capbilities/reveal.tsx
// Same reveal-on-scroll behaviour as the Software & Product Engineering
// and Data & Analytics capability pages. Needs the .ss-reveal / .ss-in-view
// CSS that ships in this route's own <AnimationStyles /> block
// (see [slug]/page.tsx).

import {
  useRef,
  useState,
  useEffect,
  type ReactNode,
  type Ref,
  type RefObject,
  type ElementType,
  type ReactElement,
  type HTMLAttributes,
} from "react";

export function useReveal<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

type RevealProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export default function Reveal({
  as,
  delay = 0,
  className = "",
  children,
  ...rest
}: RevealProps): ReactElement {
  const Tag = (as ?? "div") as ElementType;
  const [ref, inView] = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={`ss-reveal ${inView ? "ss-in-view" : ""} ${className}`}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  );
}