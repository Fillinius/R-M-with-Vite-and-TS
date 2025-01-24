export const UI_LINKS = {
  home: '/',
  characters: '/character',
  characterDetail: (characterId: number | string) =>
    `/character/${characterId}`,
  location: '/location',
  locationDetail: (locationId: number | string) => `/location/${locationId}`,
  episode: '/episode',
  episodeDetail: (episodeId: number | string) => `/episode/${episodeId}`,
  signIn: '/signIn',
  registration: '/signIn/registration',
  signOut: '/signOut',
}

export const BASEURL = {
  base: 'https://rickandmortyapi.com/api',
}

// base: 'http://localhost:3001' - адрес виртуального сервера json-server
