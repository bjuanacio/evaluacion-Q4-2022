export const DEVICE_SIZE = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '600px',
  tabletM: '768px',
  laptopM: '1024px',
  laptopL: '1440px'
}

export const DEVICE_WIDTH = {
  mobileS: `(min-width: ${DEVICE_SIZE.mobileS})`,
  mobileM: `(min-width: ${DEVICE_SIZE.mobileM})`,
  mobileL: `(min-width: ${DEVICE_SIZE.mobileL})`,
  tabletS: `(min-width: ${DEVICE_SIZE.tabletS})`,
  tabletM: `(min-width: ${DEVICE_SIZE.tabletM})`,
  laptopM: `(min-width: ${DEVICE_SIZE.laptopM})`,
  laptopL: `(min-width: ${DEVICE_SIZE.laptopL})`
}
