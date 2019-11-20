declare module '@segment/snippet' {
  interface Opts {
    host?: string;
    apiKey: string;
    page?: boolean;
    load?: boolean;
  }

  function max(opts: Opts): string;
  function min(opts: Opts): string;

  exports.max = max;
  exports.min = min;
}