import { createPool } from 'mysql2/promise';

interface Options {
  query: string;
  values?: any[];
}

const pool = createPool({
  host: 'localhost',
  user: 'root',
  database: 'travel_booking',
  password: '123456'
});

export const sql = async ({ query, values }: Options) => {
  try {
    const [rows] = await pool.query(query, values);
    return rows;
  } catch (err) {
    console.error('Database error:', err); // 打印数据库连接错误
    throw new Error('Database query failed');
  }
};