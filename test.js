const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: '127.0.0.1', // 호스트 주소
  port: 3307,        // Docker의 MariaDB 포트
  user: 'root',      // MariaDB 사용자
  password: 'root',  // MariaDB 비밀번호
  database: 'Tennis',  // 접속하려는 데이터베이스
  connectionLimit: 5, // 연결 풀의 최대 연결 수
  connectTimeout: 20000, // 연결 시간 초과 20초로 설정
});

async function connectDB() {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Connected!");
    const rows = await conn.query("SELECT 1 as val");
    console.log(rows);
  } catch (err) {
    console.error("Connection error: ", err);
  } finally {
    if (conn) conn.end();
  }
}

connectDB();
