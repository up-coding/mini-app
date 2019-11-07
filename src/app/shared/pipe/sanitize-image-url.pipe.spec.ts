import { SanitizeImageUrlPipe } from './sanitize-image-url.pipe';

describe('SanitizeImageUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeImageUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
