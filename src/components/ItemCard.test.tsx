import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ItemCard } from './ItemCard.tsx';

describe('ItemCard', () => {
  it('should render ItemCard component', () => {
    render(
      <ItemCard
        title="Test text"
        price={99}
        description="Its test description"
        imageSrc="test.jpg"
        imageAlt="It image alt text"
      />,
    );

    expect(screen.getByText('Test text')).toBeInTheDocument();
    expect(screen.getByAltText(/alt text/i)).toBeInTheDocument();
  });
});
