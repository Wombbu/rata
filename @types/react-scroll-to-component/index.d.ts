interface ScrollToComponentOptions {
  offset?: number;
  align?: 'top' | 'bottom' | 'middle';
  duration?: number;
  ease?: string;
}

declare module 'react-scroll-to-component' {
  function scrollToComponent(element: Element, options: ScrollToComponentOptions): void;
  export default scrollToComponent;
}