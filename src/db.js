import { createPool } from 'mysql2/promise';
import {
    DB_USER,
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT
} from './config.js'

export const pool = createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE
})