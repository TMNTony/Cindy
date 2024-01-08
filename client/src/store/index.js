import {createStore as _createStore} from 'vuex';
import axios from "axios";

export function createStore(currentToken, currentUser) {
    return _createStore({
        state: {
            token: currentToken || '',
            user: currentUser || {},
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
                    name: "Spain Park High School",
                    pictureURL: "sp.png"
                },
                {
                    name: "Vestavia Hills School",
                    pictureURL: "vh.png"
                }
            ],

        },
        mutations: {
            SET_AUTH_TOKEN(state, token) {
                state.token = token;
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            },
            SET_USER(state, user) {
                state.user = user;
                localStorage.setItem('user', JSON.stringify(user));
            },
            LOGOUT(state) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                state.token = '';
                state.user = {};
                axios.defaults.headers.common = {};
            }
        },
        getters: {
            getSchools(state) {
                return state.schools;
            },
            isAuthenticated: (state) => !!state.token,
        },
    });
}
