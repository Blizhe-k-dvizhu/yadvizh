import { Storage } from '@capacitor/storage';
import bridge from '@vkontakte/vk-bridge';
export interface sessionType {
  user_id: number,
  login: string,
  email: string,
  dob: string,
  number?: string,
  first_name: string,
  middle_name?: string,
  last_name: string,
  img?: string,
  social_networks?: {
    google?: string,
    vk?: string,
    instagramm?: string,
  },
  priority: number[],
  bookmarks: number[],
  is_admin: boolean,
}

export async function getStorage(key: string) {
  const { value } = await Storage.get({ key: key });
  return value;
}

export async function setStorage(key: string, value: string) {
  return await Storage.set({
    key: key,
    value: value,
  });
}

export async function deleteDataFromStorage(key: string) {
  return await Storage.remove({ key: key });
}

export async function clearStorage() {
  return await Storage.clear();
}

export async function getSession() {
  var sessionData: sessionType;
  let dataFromStorage = await getStorage("session")
  if (!dataFromStorage) {
    console.log("Не удалсь получить данные сессии");
    return 0;
  }
  sessionData = JSON.parse(dataFromStorage);
  return sessionData;
}

export async function loginWithVK() {
  bridge.send("VKWebAppInit");
  bridge.subscribe((e) => {
    console.log(e);
  })
}

export async function logOut() {
  deleteDataFromStorage("session")
}

export function getRuDate(date:Date) {
  return date.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}