import axios from 'axios';
import actions from './action';

const initialState = {
    userName: '',
    repoName: '',
    readme: '',
    gitHubData: [],
}




export default (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_GITHUB: {
            return { ...state, gitHubData: action.gitHubData }
        }
        case actions.UPDATE_REPO: {
            return { ...state, repoName: action.repoName }
        }
        case actions.UPDATE_USER: {
            return { ...state, userName: action.userName }
        }
        case actions.GET_README: {
            return { ...state, readme: action.readme }
        }
        default:
            return state
    }
}
// https://github.com/realArgen/todo
// https://api.github.com/users/{user}/repos{?type,page,per_page,sort
export const getHubData = (name) => {
    return (dispatch) => {
        axios(`https://api.github.com/${name}/repos`)
            .then(({ data }) => {
                dispatch({ type: actions.GET_GITHUB, gitHubData: data })
            })
            .catch((e) => {
                alert("Error!!! " + e)
            })
    }
}
// GET_GITHUB: 'GET_GITHUB',
// UPDATE_USER: 'UPDATE_USER',
// UPDATE_REPO: 'UPDATE_REPO',
// GET_README: 'GET_README',
export const getReadme = (userName, repoName) => {
    return (dispatch) => {
        axios(`https://raw.githubusercontent.com/${userName}/${repoName}/master/README.md`)
            .then(({ data }) => {
                dispatch({ type: actions.GET_README, readme: data })
            })
            .catch(() => {
                dispatch({ type: actions.GET_README, readme: '# No Such README.md file' })
            })
    }
}

export const updateUserName = (name) => {
    return { type: actions.UPDATE_USER, userName: name }
}

export const updateRepoName = (name) => {
    return { type: actions.UPDATE_REPO, repoName: name }
}
