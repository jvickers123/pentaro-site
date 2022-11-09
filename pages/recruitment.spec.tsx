import { render, screen } from '@testing-library/react';
import Recruitment from './recruitment';

describe('recruitment', () => {
  it('renders successfully', () => {
    render(<Recruitment />);

    const recruitmentHeading = screen.getByRole('heading', {
      name: 'RECRUITMENT',
    });

    expect(recruitmentHeading).toBeInTheDocument();
  });
});
