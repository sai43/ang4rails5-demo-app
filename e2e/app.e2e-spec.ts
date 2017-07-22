import { R5A4DemoAppPage } from './app.po';

describe('r5-a4-demo-app App', () => {
  let page: R5A4DemoAppPage;

  beforeEach(() => {
    page = new R5A4DemoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
