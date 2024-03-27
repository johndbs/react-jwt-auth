export default function authHeader(jwtToken) {
  if (jwtToken) {
    return { Authorization: `Bearer ${jwtToken}`};
  } else {
    return {};
  }
}