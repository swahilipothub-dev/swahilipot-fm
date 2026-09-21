import type { CmsAdapter } from './types';
import { LocalCmsAdapter } from './localAdapter';
import { RemoteCmsAdapter } from './remoteAdapter';
import { SanityCmsAdapter } from './sanityAdapter';

function createCmsAdapter(): CmsAdapter {
  // Set VITE_CMS_PROVIDER in .env:
  //   'sanity' — Sanity Studio content merged with the bundled local articles
  //   'remote' — generic REST API at VITE_CMS_ENDPOINT
  //   unset    — bundled local articles only
  const provider = import.meta.env.VITE_CMS_PROVIDER as string | undefined;
  if (provider === 'sanity') {
    return new SanityCmsAdapter();
  }
  if (provider === 'remote') {
    return new RemoteCmsAdapter();
  }
  return new LocalCmsAdapter();
}

export const cms: CmsAdapter = createCmsAdapter();

export type { CmsAdapter, ArticleQuery, PaginatedResult } from './types';
