const URL = {
  FCW: '/fitness-center-web',
};

export const domin = process.env.NODE_ENV === 'development' ? 'http://m-fitness-center-t.yysports.com.tw' : '';

export default {...URL};
