import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealWrapper = ({ children, selector, options }) => {
  useEffect(() => {
    if (!selector) {
      console.error('ScrollRevealWrapper: Selector is not defined.');
      return;
    }

    if (!options) {
      console.warn('ScrollRevealWrapper: Options are not defined. Using default options.');
      options = {}; // Provide default options if not defined
    }

    const scrollReveal = ScrollReveal(options);
    scrollReveal.reveal(selector);

    return () => {
      console.log('ScrollRevealWrapper: Cleaning up ScrollReveal.');
      scrollReveal.destroy();
    };
  }, [selector, options]);

  return <div>{children}</div>;
};

export default ScrollRevealWrapper;
