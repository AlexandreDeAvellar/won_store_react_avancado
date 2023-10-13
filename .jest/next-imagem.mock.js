import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'Image', {
  configurable: true,
  value: (props) => {
    const { objectFit, ...rest } = props
    return <img {...rest} />
  }
})

export default nextImage
