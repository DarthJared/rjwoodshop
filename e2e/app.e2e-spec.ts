import { RjWoodshopPage } from './app.po';

describe('rj-woodshop App', () => {
  let page: RjWoodshopPage;

  beforeEach(() => {
    page = new RjWoodshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
