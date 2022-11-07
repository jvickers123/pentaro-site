import { render, screen } from '@testing-library/react';
import User from '@testing-library/user-event';
import { ReactElement, cloneElement } from 'react';
import Home from './index';

// jest.mock(
//   'next/link',
//   () =>
//     ({ children, ...rest }: { children: ReactElement }) =>
//       cloneElement(children, { ...rest })
// );

describe('index/Home', () => {
  it('Should render properly', () => {
    render(<Home />);

    const mainHeading = screen.getByRole('heading', { name: 'PENTARO' });
    expect(mainHeading).toBeInTheDocument();
  });

  it('link to telemarketing', async () => {
    render(<Home />);

    const linkToTelemarketing = screen.getByRole('link', {
      name: 'View our telemarketing services >>',
    });

    User.click(linkToTelemarketing);

    // const telemarketing = await screen.findByRole('heading', {
    //   name: 'THE POWER OF 5',
    // });

    screen.debug();
  });
});
