import { ToProperCasePipe } from './to-proper-case.pipe';

describe('ToProperCasePipe', () => {
  it('create an instance', () => {
    const pipe = new ToProperCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('transform text uptime to Uptime', () => {
    const pipe = new ToProperCasePipe();
    expect(pipe.transform('uptime')).toBe('Uptime');
  });
});
