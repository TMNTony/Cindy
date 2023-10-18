import {createStore as _createStore} from 'vuex';

export function createStore() {
    return _createStore({
        state: {
            gallery: [
                {
                    id: 1,
                    pictureURL: "hso.jpg",
                    caption: "Huntsville Symphony Orchestra horn section\n" +
                        "After a performance of Schumann’s Konzertstück, January 2019"
                },
                {
                    id: 2,
                    pictureURL: "tso.jpg",
                    caption: "Tuscaloosa Symphony Orchestra horn section \n" +
                        "Cynthia Chambless, Horn 3"
                },
                {
                    id: 3,
                    pictureURL: "TSO-horns.jpg",
                    caption: "Tuscaloosa Symphony Orchestra horns with the University of Alabama Huxford Symphony Orchestra performing Schumann’s Konzertstück Fall 2015"
                },
                {
                    id: 4,
                    pictureURL: "sw.jpg",
                    caption: "Huntsville Symphony Orchestra\n" +
                        "John Williams concert "
                },
                {
                    id: 5,
                    pictureURL: "skip.jpg",
                    caption: "Cynthia Chambless and Charles ‘Skip’ Snead"
                },
                {
                    id: 6,
                    pictureURL: "marty.jpg",
                    caption: "Cynthia Chambless and Martin ‘Marty’ Hackleman "
                },
            ],
            videos: [
                {
                    id: 1,
                    videoURL: 'https://www.youtube.com/embed/jhkytzoQpW4?si=TcDsrE2FUf5MVp3p',
                    caption: ""
                },
                {
                    id: 2,
                    videoURL: 'https://www.youtube.com/embed/3CyVaBWBFVA?si=JQcWX1-x8xqno2Ps',
                    caption: ""
                }
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
                    pictureURL: "simmons.png"
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
            getVideos(state) {
                return state.videos;
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
