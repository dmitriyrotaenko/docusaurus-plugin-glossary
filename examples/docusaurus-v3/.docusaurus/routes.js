import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/glossary',
    component: ComponentCreator('/glossary', '24e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '776'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f74'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '221'),
            routes: [
              {
                path: '/docs/auto-link',
                component: ComponentCreator('/docs/auto-link', 'cdb'),
                exact: true
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/manual-link',
                component: ComponentCreator('/docs/manual-link', '476'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'fd5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
