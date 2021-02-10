/**
 * Simple CSV generator
 * Developed by Brayan Iribe
 */

class SimpleCSV {
    constructor(params) {
        const $params = {
            header: null, delimiter: ',', ln: '\n',
            ...params
        };
        const { header, delimiter, ln } = $params;
        this.delimiter = delimiter;
        this.ln = ln;
        this.buffer = [];
        if (header !== null && header.length)
            this.push(header);
    }

    push(data) {
        if (typeof data !== 'object' || !data.length) {
            throw new Error('Data pushed is not valid. Are you sure is a 1D array?');
        }

        /* if (this.buffer.length) {
            if (data.length !== this.buffer[0].length)
                throw new Error('Data length is not equal to header length!');
        } */
        this.buffer.push(data);
    }

    generate() {
        let data = '';
        for (let row of this.buffer) {
            if (row === null)
                row = "NULL"
            data += '"' + row.join(`"${this.delimiter}"`) + '"' + this.ln;
        }
        return data;
    }
}

export default SimpleCSV;