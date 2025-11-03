import React, { useMemo, useState } from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

/**
 * GlossaryTerm component - displays an inline term with tooltip
 *
 * Usage:
 * import GlossaryTerm from '@theme/GlossaryTerm';
 *
 * <GlossaryTerm term="API" definition="Application Programming Interface" />
 * or
 * <GlossaryTerm term="API">custom display text</GlossaryTerm>
 *
 * @param {object} props
 * @param {string} props.term - The glossary term
 * @param {string} props.definition - The definition to show in tooltip
 * @param {string} props.routePath - Route path to glossary page (default: '/glossary')
 * @param {React.ReactNode} props.children - Optional custom display text
 */
export default function GlossaryTerm({ term, definition, routePath = '/glossary', children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Pull definition/route from plugin global data if not provided
  const pluginData = usePluginData('docusaurus-plugin-glossary');
  const effectiveDefinition = useMemo(() => {
    if (definition && typeof definition === 'string' && definition.length > 0) {
      return definition;
    }
    const terms = (pluginData && pluginData.terms) || [];
    const found = terms.find(
      (t) => typeof t.term === 'string' && t.term.toLowerCase() === String(term).toLowerCase()
    );
    return found && found.definition ? found.definition : undefined;
  }, [definition, pluginData, term]);

  const effectiveRoutePath = useMemo(() => {
    if (routePath && typeof routePath === 'string' && routePath.length > 0) return routePath;
    return (pluginData && pluginData.routePath) || '/glossary';
  }, [pluginData, routePath]);

  const displayText = children || term;
  const termId = term.toLowerCase().replace(/\s+/g, '-');

  return (
    <span className={styles.glossaryTermWrapper}>
      <a
        href={`${effectiveRoutePath}#${termId}`}
        className={styles.glossaryTerm}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-describedby={`tooltip-${termId}`}
      >
        {displayText}
      </a>
      {effectiveDefinition && (
        <span
          id={`tooltip-${termId}`}
          className={`${styles.tooltip} ${showTooltip ? styles.tooltipVisible : ''}`}
          role="tooltip"
        >
          <strong>{term}:</strong> {effectiveDefinition}
        </span>
      )}
    </span>
  );
}
