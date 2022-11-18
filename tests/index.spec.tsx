import { render, screen, waitFor } from '@testing-library/react';
import User from '@testing-library/user-event';
import createMockRouter from '../mocks/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import Home from '../pages/index';

describe('index/Home', () => {
  it('Should render properly', () => {
    render(<Home />);

    const mainHeading = screen.getByRole('heading', { name: 'PENTARO' });
    expect(mainHeading).toBeInTheDocument();
  });

  it('link to telemarketing', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Home />
      </RouterContext.Provider>
    );

    const linkToTelemarketing = screen.getByRole('link', {
      name: 'View our telemarketing services >>',
    });

    User.click(linkToTelemarketing);
    await waitFor(() => {
      expect(router.push).toBeCalledWith('/telemarketing', '/telemarketing', {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });
  });

  it('link to recruitment', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Home />
      </RouterContext.Provider>
    );

    const linkToRecruitment = screen.getByRole('link', {
      name: 'View our recruitment services >>',
    });

    User.click(linkToRecruitment);
    await waitFor(() => {
      expect(router.push).toBeCalledWith('/recruitment', '/recruitment', {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });
  });

  it('link to contact', async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <Home />
      </RouterContext.Provider>
    );

    const linkToContact = screen.getByRole('link', {
      name: 'Get in touch >>',
    });

    User.click(linkToContact);
    await waitFor(() => {
      expect(router.push).toBeCalledWith('/get-in-touch', '/get-in-touch', {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });
  });
});
