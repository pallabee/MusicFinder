import { MusicfinderappPage } from './app.po';

describe('musicfinderapp App', function() {
  let page: MusicfinderappPage;

  beforeEach(() => {
    page = new MusicfinderappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
