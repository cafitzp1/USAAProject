class Util {
    /**
     * Returns date now in a representable string format
     */
    dateNow() {
        return new Date().toJSON().slice(0, 19).replace('T', ' ');
    };

    /**
     * 
     * @param {Date} dateToConvert A date to convert into a representable string format
     */
    dateConverted(dateToConvert) {
        return dateToConvert.toJSON().slice(0, 19).replace('T', ' ');
    }
}

module.exports = Util;