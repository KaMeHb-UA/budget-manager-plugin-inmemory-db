import get from '../helpers/db.js';

export default ({ table, data }) => get(table).push(data) - 1 + ''
