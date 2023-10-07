import { NextRouter } from 'next/router';

export function mockUseRouter(router: Partial<NextRouter>): NextRouter {
  return {
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    basePath: '',
    defaultLocale: 'en',
    locale: 'en',
    locales: ['en'],
    domainLocales: [],
    isLocaleDomain: false,
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(true),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isReady: true,
    isPreview: false,
    ...router,
  };
}

afterEach(() => {
  jest.restoreAllMocks();
});
