const mockUseSession = jest.spyOn(require('next-auth/react'), 'useSession')
const mockSession = { jwt: 'hashed_id', user: { email: 'mail@mail.com', id: '3' } }
mockUseSession.mockImplementation(() => ({ data: mockSession }))

export {}
