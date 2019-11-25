import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/next-server/lib/router-context";

export const RouterProvider: React.FunctionComponent<{
  value?: Partial<NextRouter>;
}> = ({ children, value = {} }) => {
  const router = {
    pathname: "/some-path",
    route: "/some-route",
    query: {},
    asPath: "/some-path",
    push: async () => true,
    replace: async () => true,
    reload: () => null,
    back: () => null,
    prefetch: async () => undefined,
    beforePopState: () => null,
    events: {
      on: () => null,
      off: () => null,
      emit: () => null
    },
    ...value
  };

  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};

export const analytics = () => ({
  use: jest.fn(),
  init: jest.fn(),
  addIntegration: jest.fn(),
  setAnonymousId: jest.fn(),
  load: jest.fn(),
  identify: jest.fn(),
  track: jest.fn(),
  page: jest.fn(),
  group: jest.fn(),
  alias: jest.fn(),
  trackLink: jest.fn(),
  trackForm: jest.fn(),
  ready: jest.fn(),
  reset: jest.fn(),
  user: jest.fn(),
  debug: jest.fn(),
  on: jest.fn(),
  timeout: jest.fn()
});
