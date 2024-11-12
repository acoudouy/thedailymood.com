export const calculatePlayerDimensions = (format: string, uiSize: number) => {
    let playerWidth: number;
    let playerHeight: number;
  
    switch (format) {
      case 'square':
        playerWidth = uiSize;
        playerHeight = uiSize;
        break;
      case 'horizontal':
        playerWidth = uiSize * 1.77; // 16:9 aspect ratio
        playerHeight = uiSize;
        break;
      case 'vertical':
        playerWidth = uiSize * 0.56; // 9:16 aspect ratio
        playerHeight = uiSize;
        break;
      case 'horizontal54':
        playerWidth = uiSize * 1.25; // 5:4 aspect ratio
        playerHeight = uiSize;
        break;
      case 'vertical45':
        playerWidth = uiSize * 0.8; // 4:5 aspect ratio
        playerHeight = uiSize;
        break;
      default:
        playerWidth = uiSize;
        playerHeight = uiSize;
    }
  
    return { playerWidth, playerHeight };
  }; 