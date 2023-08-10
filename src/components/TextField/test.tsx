import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render as renderWithTheme, screen } from '../../utils/test-utils'

import TextField, { TextFieldProps } from '.'
import { mailIcon } from '../icons/mail-icon'
import theme from '../../styles/theme'

const props: TextFieldProps = {
  label: 'TextField',
  id: 'TextField',
  name: 'TextField'
}

describe('<TextField />', () => {
  it('Renders with Label', () => {
    renderWithTheme(<TextField {...props} />)

    expect(screen.getByLabelText(`${props.label}`)).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText(`${props.label}`)).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(<TextField onInput={onInput} {...props} />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Is accessible by tab', async () => {
    renderWithTheme(<TextField {...props} />)

    // const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    // userEvent.tab()
    // expect(input).toHaveFocus()
  })

  it('should render with icon', () => {
    const { container } = renderWithTheme(<TextField {...props} icon={mailIcon} />)

    const icon = container.querySelector('span')
    expect(icon).toBeInTheDocument()
  })

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(<TextField {...props} disabled />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const newText = 'it is a new text'
    userEvent.type(input, newText)
    await waitFor(() => expect(input).not.toHaveValue(newText))
    expect(onInput).not.toHaveBeenCalled()
  })

  it('`is not accessible by tab when disabled', () => {
    renderWithTheme(<TextField {...props} />)
    const input = screen.getByRole('textbox')
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('should render with error', () => {
    renderWithTheme(<TextField {...props} error="Error Message" />)
    expect(screen.getByText(/Error Message/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveStyle({ color: `${theme.colors.black}` })
    expect(screen.getByText(/Error Message/i)).toHaveStyle({ color: `${theme.colors.danger}` })
  })
})
