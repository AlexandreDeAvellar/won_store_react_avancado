import { screen } from '@testing-library/react'
import Banner, { BannerProps } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

const props: BannerProps = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the image', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    const img = screen.getByRole('img')
    expect(img.getAttribute('src')).toBe(props.img)

    expect(container).toMatchSnapshot()
  })

  it('should render components correctly', () => {
    renderWithTheme(<Banner {...props} />)

    expect(screen.getByText(/Defy death/i)).toBeInTheDocument()
    expect(screen.getByText(/Play the new /i)).toBeInTheDocument()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(<Banner {...props} ribbon="20% off" ribbonSize="small" ribbonColor="secondary" />)
    expect(screen.getByText(/20% off/i)).toBeInTheDocument()
    expect(screen.getByText(/20% off/i)).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(screen.getByText(/20% off/i)).toHaveStyle({ right: '-1.3rem' })
  })
})
