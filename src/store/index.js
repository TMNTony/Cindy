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
            ],
            schools: [
                {
                    name: "Berry Middle School",
                    pictureURL: "berry.png"
                },
                {
                    name: "Bumpus Middle School",
                    pictureURL: "bumpus.png"
                },
                {
                    name: "Hoover High School",
                    pictureURL: "hhs.png"
                },
                {
                    name: "James Clemons High School",
                    pictureURL: "jchs.png"
                },
                {
                    name: "Montevallo Middle School",
                    pictureURL: "mms.png"
                },
                {
                    name: "Northridge High School",
                    pictureURL: "nrhs.png"
                },
                {
                    name: "Pizitz Middle School",
                    pictureURL: "pizitz.png"
                },
                {
                    name: "Simmons Middle School",
                    pictureURL: "simmons.jfif"
                },
                {
                    name: "Thompson High School",
                    pictureURL: "ths.png"
                },
                {
                    name: "Thompson Middle School",
                    pictureURL: "tms.png"
                },
                {
                    name: "Vestavia Hills School",
                    pictureURL: "vh.png"
                }
            ],
            posts: [
                // {
                //   title: "",
                //   description: "",
                //   image: "",
                //   content: ""
                // }
            ],
            services: [
                {
                    icon: "fa fa-user",
                    service: "Private Lessons",
                    description: ""
                },
                {
                    icon:  "fa fa-users",
                    service: "Master Classes",
                    description: ""
                }
            ],
            experience: [
                {
                    date: "",
                    title: "",
                    description: "",
                    icon: ""
                },

            ]
        },
        mutations: {},
        getters: {
            getPhotos(state) {
                return state.gallery;
            },
            getSchools(state) {
                return state.schools;
            },
            getPosts(state) {
                return state.posts;
            },
            getServices(state) {
                return state.services;
            },
            getExperiences(state) {
                return state.experience;
            }
        }
    });
}