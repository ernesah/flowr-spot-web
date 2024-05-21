import { render } from '@testing-library/react';
import ProfileModal from '../components/modals/ProfileModal';

describe('ProfileModal component', () => {
  test('matches snapshot', () => {
    const closeModal = jest.fn();
    const { asFragment } = render(<ProfileModal closeModal={closeModal} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
