import get from '../helpers/db.js';

const ops = {
    '=': (op1, op2) => op1 === op2,
    '!=': (op1, op2) => op1 !== op2,
};

export default ({ table, options }) => {
    const { limit, reverse, filters } = options || {};
    let tbl = get(table).map((data, id) => ({ id: id + '', data }));
    if(filters) for(const [name, op, val] of filters){
        const cb = ops[op];
        tbl = tbl.filter(({ data }) => cb(data[name], val));
    }
    if(reverse) tbl = tbl.reverse();
    if(limit) tbl = tbl.slice(0, limit);
    return tbl;
}
