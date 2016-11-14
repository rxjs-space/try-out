import { TryOutPage } from './app.po';

describe('try-out App', function() {
  let page: TryOutPage;

  beforeEach(() => {
    page = new TryOutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
