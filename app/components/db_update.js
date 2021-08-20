import get from '../helpers/db.js';

export default ({ table, id, data }) => {
    const tbl = get(table);
    if(!(id in tbl)) throw new Error('row with id ' + id + ' not found');
    tbl[id] = data;
    return null;
}
