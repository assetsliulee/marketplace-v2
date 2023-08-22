const optimizeImage = (imageHref: string | undefined, width: number) => {
  try {
    if (!imageHref) return ''
    let url = new URL(imageHref)
    if (url.host === 'lh3.googleusercontent.com') {
      if (imageHref.includes('=s') || imageHref.includes('=w')) {
        let newImage = imageHref.split('=')
        return `${newImage[0].replace('lh3.googleusercontent.com','i.seadn.io/gae')}?w=${width}&auto=format`
      }
      return `${imageHref.replace('lh3.googleusercontent.com','i.seadn.io/gae')}?w=${width}&auto=format`
    } else if (url.host === 'i.seadn.io') {
      if (imageHref.includes('w=')) {
        let newImage = imageHref.split('=')
        return `${newImage[0]}=${width}`
      }
      return `${imageHref}?w=${width}`
    }
  } catch (e) {
    console.warn('Failed to optimize image', e)
  }
  return imageHref ? imageHref : ''
}
export default optimizeImage
