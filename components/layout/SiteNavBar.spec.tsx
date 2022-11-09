import { render, screen, waitFor } from '@testing-library/react';
import User from '@testing-library/user-event';
import createMockRouter from '../../mocks/createMockRouter';
import SiteNavBar from './SiteNavBar';
import { RouterContext } from 'next/dist/shared/lib/router-context';

jest.mock('next/image');

const setUp = () => {
  const router = createMockRouter({});

  render(
    <RouterContext.Provider value={router}>
      <SiteNavBar />
    </RouterContext.Provider>
  );

  return {
    router,
  };
};

describe('SiteNavBar', () => {
  it('renders Desktop navigation successfully', () => {
    setUp();

    const desktopNav = screen.getByRole('navigation');

    expect(desktopNav).toBeInTheDocument();
  });

  it('desktop nav should have 5 links', () => {
    setUp();
    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(6);
  });

  it('desktop HOME link navigates to "/"', async () => {
    const { router } = setUp();

    const homeLink = screen.getByRole('link', { name: 'Home' });

    User.click(homeLink);

    await waitFor(() => {
      expect(router.push).toBeCalledWith('/', '/', {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });
  });

  it('desktop TELEMARKETING link navigates to "/telemarketing"', async () => {
    const { router } = setUp();

    const telemarketingLink = screen.getByRole('link', {
      name: 'Telemarketing',
    });

    User.click(telemarketingLink);

    await waitFor(() => {
      expect(router.push).toBeCalledWith('/telemarketing', '/telemarketing', {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });
  });

  it('desktop RECRUITMENT link navigates to "/recruitment"', async () => {
    const { router } = setUp();

    const recruitmentLink = screen.getByRole('link', {
      name: 'Recruitment',
    });

    User.click(recruitmentLink);

    await waitFor(() => {
      expect(router.push).toBeCalledWith('/recruitment', '/recruitment', {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });
  });

  it('desktop PENTARO WAY link navigates to "/pentaro-way"', async () => {
    const { router } = setUp();

    const pentWayLink = screen.getByRole('link', {
      name: 'The Pentaro Way',
    });

    User.click(pentWayLink);

    await waitFor(() => {
      expect(router.push).toBeCalledWith('/pentaro-way', '/pentaro-way', {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });
  });

  it('desktop GET IN TOUCH link navigates to "/get-in-touch"', async () => {
    const { router } = setUp();

    const getInTouchLink = screen.getByRole('link', {
      name: 'Get In Touch',
    });

    User.click(getInTouchLink);

    await waitFor(() => {
      expect(router.push).toBeCalledWith('/get-in-touch', '/get-in-touch', {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });
  });

  it('clicking mobile button opens mobile nav modal', async () => {
    setUp();

    const openMobileNavButton = screen.getByRole('button', {
      name: 'navigation',
    });
    User.click(openMobileNavButton);

    await waitFor(() => {
      const links = screen.getAllByRole('link');
      expect(links).toHaveLength(11);
    });
  });

  it('mobile HOME nav links to home', async () => {
    const { router } = setUp();

    const openMobileNavButton = screen.getByRole('button', {
      name: 'navigation',
    });
    User.click(openMobileNavButton);

    let homeLinks: HTMLElement[];

    await waitFor(() => {
      homeLinks = screen.getAllByRole('link', { name: 'Home' });
      expect(homeLinks.length).toEqual(2);
    });

    User.click(homeLinks[0]);

    await waitFor(() => {
      expect(router.push).toBeCalledWith('/', '/', {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });
  });

  it('mobile TELEMARKETING nav links to telemarketing', async () => {
    const { router } = setUp();

    const openMobileNavButton = screen.getByRole('button', {
      name: 'navigation',
    });
    User.click(openMobileNavButton);

    let telemarketingLinks: HTMLElement[];

    await waitFor(() => {
      telemarketingLinks = screen.getAllByRole('link', {
        name: 'Telemarketing',
      });
      expect(telemarketingLinks.length).toEqual(2);
    });

    User.click(telemarketingLinks[0]);

    await waitFor(() => {
      expect(router.push).toBeCalledWith('/telemarketing', '/telemarketing', {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });
  });

  it('mobile RECRUITMENT nav links to recruitment', async () => {
    const { router } = setUp();

    const openMobileNavButton = screen.getByRole('button', {
      name: 'navigation',
    });
    User.click(openMobileNavButton);

    let recruitmentLinks: HTMLElement[];

    await waitFor(() => {
      recruitmentLinks = screen.getAllByRole('link', {
        name: 'Recruitment',
      });
      expect(recruitmentLinks.length).toEqual(2);
    });

    User.click(recruitmentLinks[0]);

    await waitFor(() => {
      expect(router.push).toBeCalledWith('/recruitment', '/recruitment', {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });
  });

  it('mobile PENTARO WAY nav links to pentaro-way', async () => {
    const { router } = setUp();

    const openMobileNavButton = screen.getByRole('button', {
      name: 'navigation',
    });
    User.click(openMobileNavButton);

    let pentaroWayLinks: HTMLElement[];

    await waitFor(() => {
      pentaroWayLinks = screen.getAllByRole('link', {
        name: 'The Pentaro Way',
      });
      expect(pentaroWayLinks.length).toEqual(2);
    });

    User.click(pentaroWayLinks[0]);

    await waitFor(() => {
      expect(router.push).toBeCalledWith('/pentaro-way', '/pentaro-way', {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });
  });

  it('mobile GET IN TOUCH nav links to get in touch', async () => {
    const { router } = setUp();

    const openMobileNavButton = screen.getByRole('button', {
      name: 'navigation',
    });
    User.click(openMobileNavButton);

    let getInTouchLinks: HTMLElement[];

    await waitFor(() => {
      getInTouchLinks = screen.getAllByRole('link', {
        name: 'Get In Touch',
      });
      expect(getInTouchLinks.length).toEqual(2);
    });

    User.click(getInTouchLinks[0]);

    await waitFor(() => {
      expect(router.push).toBeCalledWith('/get-in-touch', '/get-in-touch', {
        locale: undefined,
        scroll: undefined,
        shallow: undefined,
      });
    });
  });
});
