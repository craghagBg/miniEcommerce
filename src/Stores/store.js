import EventEmitter from 'events'
import dispatcher from '../dispatcher'
import data from '../data'

class Store extends EventEmitter {
    constructor () {
        super();
        this.data = {};
    }

    /**
     * Fire change event and send the data to all listeners.
     */
    getData () {
        if (data) {
            this.data = data;
            this.emit('change', this.data);
        }
    }

    add (id) {
        this.data.cakes.map((cake) => {
            if (cake.id === id) {
                cake.basket++;
            }
        });
        this.emit('change', this.data);
    }

    remove (id) {
        this.data.cakes.filter((cake) => {
            if (cake.id === id && cake.basket > 0) {
                cake.basket--;
            }
        });
        this.emit('change', this.data);
    }

    /**
     *
     * @param {Object} action
     */
    handleAction (action) {
        switch (action.type) {
            case 'FETCH_DATA': this.getData();
                break;
            case 'ADD': this.add(action.id);
                break;
            case 'REMOVE': this.remove(action.id);
                break;
            default:
                break;
        }
    }
}

let store = new Store();

dispatcher.register(store.handleAction.bind(store));

export default store