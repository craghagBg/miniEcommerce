import dispatcher from '../dispatcher'

let actions = {
    fetchData: () => {
        dispatcher.dispatch({
            type: 'FETCH_DATA',
        })
    }
};

export default actions