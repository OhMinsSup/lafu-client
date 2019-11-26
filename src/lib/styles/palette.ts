const palette = {
    /* teal */
    teal0: '#F3FFFB',
    teal1: '#C3FAE8',
    teal2: '#96F2D7',
    teal3: '#63E6BE',
    teal4: '#38D9A9',
    teal5: '#20C997',
    teal6: '#12B886',
    teal7: '#0CA678',
    teal8: '#099268',
    teal9: '#087F5B',
    /* 색상 추가 옵션 */
    teal20: '#14f1ae',
    teal21: '#0ace93fc',
  
    /* 투명도 색생 옵션 */
    teal31: '#0ace9387',
  
    /* cyan */
    cyan0: '#e3fafc',
    cyan1: '#c5f6fa',
    cyan2: '#99e9f2',
    cyan3: '#66d9e8',
    cyan4: '#3bc9db',
    cyan5: '#22b8cf',
    cyan6: '#15aabf',
    cyan7: '#1098ad',
    cyan8: '#0c8599',
    cyan9: '#0b7285',
    /* 색상 추가 옵션 */
    cyan20: '#5bd0e2',
    cyan21: '#1cb3ca',
  
    /* 투명도 색생 옵션 */
    cyan31: '#1cb3ca7a',
  
    /* gray */
    gray0: '#F8F9FA',
    gray1: '#F1F3F5',
    gray2: '#E9ECEF',
    gray3: '#DEE2E6',
    gray4: '#CED4DA',
    gray5: '#ADB5BD',
    gray6: '#868E96',
    gray7: '#495057',
    gray8: '#343A40',
    gray9: '#212529',
    /* red */
    red0: '#fff5f5',
    red1: '#ffe3e3',
    red2: '#ffc9c9',
    red3: '#ffa8a8',
    red4: '#ff8787',
    red5: '#ff6b6b',
    red6: '#fa5252',
    red7: '#f03e3e',
    red8: '#e03131',
    red9: '#c92a2a',
  };
  
  export const buttonColorMap: {
    [color: string]: {
      background: string;
      color: string;
      hoverBackground: string;
    };
  } = {
    teal: {
      background: palette.teal6,
      color: 'white',
      hoverBackground: palette.teal5,
    },
    lightGray: {
      background: palette.gray2,
      color: palette.gray7,
      hoverBackground: palette.gray1,
    },
    gray: {
      background: palette.gray6,
      color: 'white',
      hoverBackground: palette.gray5,
    },
    darkGray: {
      background: palette.gray8,
      color: 'white',
      hoverBackground: palette.gray6,
    },
  };
  
  export default palette;
  