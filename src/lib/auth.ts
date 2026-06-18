export const AUTH_COOKIE = "edu-auth";

export const DEMO_USERNAME = "mnh";
export const DEMO_PASSWORD = "123";

export function isValidCredentials(username: string, password: string) {
  return username === DEMO_USERNAME && password === DEMO_PASSWORD;
}
