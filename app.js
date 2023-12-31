import express from 'express';
import connect from './schemas/index.js';
import Routers from './routes/index.js';

import { config } from 'dotenv';
config();

const app = express();
const PORT = process.env.PORT;

connect();
// Express에서 req.body에 접근하여 body 데이터를 사용할 수 있도록 설정합니다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//라우터 설정
const router = express.Router();

//메인 화면
router.get('/', (req, res) => {
  return res.json({ message: '주특기(3주차) 1차 시험' });
});

app.use('/', [router, Routers]);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
