export default {

    /**
     *
     * @param {Array} p - An array of properties that should check
     * @param {Object} o - Object that should have properties p
     */
    has : (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)
}
