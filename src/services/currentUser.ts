import { RequestCookieStore } from "@worker-tools/request-cookie-store";

export interface CurrentUser {
  readonly username: string;
}

export async function readCurrentUser(request: Request): Promise<null | CurrentUser> {
  const cookieStore = new RequestCookieStore(request);
  const username = (await cookieStore.get("insecure-username"))?.value;
  if (!username) {
    return null;
  }
  return Object.freeze({ username });
}
