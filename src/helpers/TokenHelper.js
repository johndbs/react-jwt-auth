export const parseJwtTokenExpiration = (token) => {
    try {
      return JSON.parse(atob(token?.split(".")[1])).exp * 1000;
    } catch (e) {
      console.error(e);
      return null;
    }
  };
  