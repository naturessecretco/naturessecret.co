export type DatabaseObjectType = any


export type QueryDatabaseProps = {
    keys?: string[],
    db?: any[],
    batch?: boolean,
    source?: string,
    version?: string | number
}


export type CreateDatabaseProps = {
    name?: string,
    predicate?: Function,
    shape?: Function,
    data?: any
}