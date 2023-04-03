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
})
