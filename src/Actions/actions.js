import dispatcher from '../dispatcher'

let actions = {
    fetchData: () => {
        dispatcher.dispatch({
            type: 'FETCH_DATA',
        })
    },
    add: (id) => {
        dispatcher.dispatch({
            type: 'ADD',
            id
        })
    },
    remove: (id) => {
        dispatcher.dispatch({
            type: 'REMOVE',
            id
        })
    }
};

export default actions