import '../../../.jest/match-media-mock'
import { fireEvent } from '@testing-library/react'
import Gallery from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'
import { galleryProps } from './gallery-mocks'

const mockItems = galleryProps.slice(0, 2)

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    expect(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimg%2Fgames%2Fcyberpunk-1.jpg&w=640&q=75'
    )
    expect(screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimg%2Fgames%2Fcyberpunk-2.jpg&w=640&q=75'
    )
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    fireEvent.click(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }))
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle close modal when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')
    fireEvent.click(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }))
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when ESC button is pressed', () => {
    const { container } = renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')
    fireEvent.click(screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }))

    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    fireEvent.click(screen.getByRole('button', { name: /Thumb - Gallery Image 2/i }))
    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })
})
