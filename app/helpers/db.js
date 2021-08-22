const db = Object.create(null);

/**
 * @arg {string} table
 * @return {any[]}
 */
export default table => {
    if(!(table in db)) db[table] = [];
    return db[table];
}
