import { render, screen } from '@testing-library/react';
import PentaroWay from './pentaro-way';

describe('pentaroWay', () => {
  it('renders successfully', () => {
    render(<PentaroWay />);

    const pentaroWayHeading = screen.getAllByRole('heading', {
      name: 'THE PENTARO WAY',
    });

    expect(pentaroWayHeading[1]).toBeInTheDocument();
  });
});
