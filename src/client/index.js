import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

/**
 * Client module for glossary plugin
 * This runs automatically on every page via getClientModules()
 * Similar to docusaurus-plugin-image-zoom approach
 */
export default (function () {
  // Only run in browser environment
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate({ location }) {
      // GlossaryTerm components handle their own tooltips via React
      // This client module can handle any global initialization if needed

      // Optional: Log for debugging
      if (process.env.NODE_ENV !== 'production') {
        const glossaryTerms = document.querySelectorAll('[data-glossary-term], .glossaryTerm');
        if (glossaryTerms.length > 0) {
          console.log(
            `[glossary-plugin] Initialized ${glossaryTerms.length} glossary term(s) on route:`,
            location.pathname
          );
        }
      }

      // Future enhancement: Could add DOM-based term detection here
      // This would find plain text terms and add tooltips without requiring
      // the remark plugin, similar to how image-zoom finds and enhances <img> tags
    },
  };
})();
