import { Ng4MaterialAppPage } from './app.po';

describe('ng4-material-app App', () => {
  let page: Ng4MaterialAppPage;

  beforeEach(() => {
    page = new Ng4MaterialAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
