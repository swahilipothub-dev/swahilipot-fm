import type { CmsAdapter } from './types';
import { LocalCmsAdapter } from './localAdapter';
import { RemoteCmsAdapter } from './remoteAdapter';

function createCmsAdapter(): CmsAdapter {
  // Switch to 'remote' by setting VITE_CMS_PROVIDER=remote in .env
  const provider = import.meta.env.VITE_CMS_PROVIDER as string | undefined;
  if (provider === 'remote') {
    return new RemoteCmsAdapter();
  }
  return new LocalCmsAdapter();
}

export const cms: CmsAdapter = createCmsAdapter();

export type { CmsAdapter, ArticleQuery, PaginatedResult } from './types';
