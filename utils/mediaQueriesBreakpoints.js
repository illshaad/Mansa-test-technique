/* eslint-disable import/prefer-default-export */

export const screensizeInt = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 428,
  tabletS: 640,
  tablet: 768,
  tabletL: 800,
  laptopS: 900,
  laptop: 1024,
  laptopM: 1110,
  laptopML: 1280,
  laptopL: 1440,
  desktopS: 1600,
  desktop: 2560,
};

export const screensize = {
  mobileS: screensizeInt.mobileS.toString(),
  mobileM: screensizeInt.mobileM.toString(),
  mobileL: screensizeInt.mobileL.toString(),
  tabletS: screensizeInt.tabletS.toString(),
  tablet: screensizeInt.tablet.toString(),
  tabletL: screensizeInt.tabletL.toString(),
  laptop: screensizeInt.laptop.toString(),
  laptopM: screensizeInt.laptopM.toString(),
  laptopML: screensizeInt.laptopML.toString(),
  laptopL: screensizeInt.laptopL.toString(),
  desktopS: screensizeInt.desktopS.toString(),
  desktop: screensizeInt.desktop.toString(),
  laptopS: screensizeInt.laptopS.toString(),
};

export const screensizePx = {
  mobileS: `${screensize.mobileS}px`,
  mobileM: `${screensize.mobileM}px`,
  mobileL: `${screensize.mobileL}px`,
  tabletS: `${screensize.tabletS}px`,
  tablet: `${screensize.tablet}px`,
  tabletL: `${screensize.tabletL}px`,
  laptop: `${screensize.laptop}px`,
  laptopM: `${screensize.laptopM}px`,
  laptopML: `${screensize.laptopML}px`,
  laptopL: `${screensize.laptopL}px`,
  desktopS: `${screensize.desktopS}px`,
  desktop: `${screensize.desktop}px`,
  laptopS: `${screensize.laptopS}px`,
};

export const device = {
  mobileS: `(max-width: ${screensizePx.mobileS})`,
  mobileM: `(max-width: ${screensizePx.mobileM})`,
  mobileL: `(max-width: ${screensizePx.mobileL})`,
  tabletS: `(max-width: ${screensizePx.tabletS})`,
  tablet: `(max-width: ${screensizePx.tablet})`,
  tabletL: `(max-width: ${screensizePx.tabletL})`,
  laptop: `(max-width: ${screensizePx.laptop})`,
  laptopM: `(max-width: ${screensizePx.laptopM})`,
  laptopML: `(max-width: ${screensizePx.laptopML})`,
  laptopL: `(max-width: ${screensizePx.laptopL})`,
  desktopS: `(max-width: ${screensizePx.desktopS})`,
  desktop: `(max-width: ${screensizePx.desktop})`,
  laptopS: `(max-width: ${screensizePx.laptopS})`,
  desktopL: `(max-width: ${screensizePx.desktop})`,
};
