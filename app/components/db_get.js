import get from '../helpers/db.js';

export default ({ table, options }) => {
    const { limit, reverse } = options || {};
    let tbl = get(table);
    if(reverse) tbl = tbl.reverse();
    if(limit) tbl = tbl.slice(0, limit);
    return tbl;
}
