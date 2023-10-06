import {createStore as _createStore} from 'vuex';

export function createStore() {
  return _createStore({
    state: {
      gallery: [
        {
          id: 1,
          pictureURL: "hso.jpeg",
        },
        {
          id: 2,
          pictureURL: "tso.jpeg",
        },
        {
          id: 3,
          pictureURL: "TSO-horns.jpeg",
        },
        {
          id: 4,
          pictureURL: "sw.jpeg",
        },
        {
          id: 5,
          pictureURL: "skip.jpeg",
        },
        {
          id: 6,
          pictureURL: "marty.jpeg",
        },
      ]
    },
    mutations: {},
    getters: {
      getPhotos(state) {
        return state.gallery;
      },
    }
  });
}
