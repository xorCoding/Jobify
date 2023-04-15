const attachCookies = ({ res, token }) => {
  const oneDay = 1000 * 60 * 60 * 24; // 1 day in milliseconds
  res.cookie("token", token, {
    httpOnly: true, // to prevent client side js from reading the cookie
    expires: new Date(Date.now() + oneDay), // cookie will be removed after 1 day
    secure: process.env.NODE_ENV === "production", // cookie will only be sent on https, in production mode
  });
};

export default attachCookies;
