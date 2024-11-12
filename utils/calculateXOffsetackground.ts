export const calculateXOffset = (format: string) => {
  let xOffset: number

  switch (format) {
    case 'square':
      xOffset = -280
      break
    case 'horizontal':
      xOffset = 0
      break
    case 'vertical':
      xOffset = -350
      break
    case 'horizontal54':
      xOffset = -200
      break
    case 'vertical45':
      xOffset = -330
      break
    default:
      xOffset = 0
  }

  return xOffset
}
