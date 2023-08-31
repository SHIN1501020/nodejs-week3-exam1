import express from 'express';
import User from '../schemas/user.js';
//라우터 설정
const router = express.Router();

//회원 생성
router.post('/', async (req, res) => {
  try {
    const { name, ID, pw, email } = req.body;
    const user = new User({ name, ID, pw, email });
    await user.save();
    return res.status(201).json({ message: '회원을 생성하였습니다.' });
  } catch (err) {
    return res
      .status(400)
      .json({ message: '데이터 형식이 올바르지 않습니다.' });
  }
});

//회원 전체 목록 조회
router.get('/', async (req, res) => {
  const users = await User.find().exec();
  const newUsers = users.map((user) => {
    return {
      userId: user.userId,
      name: user.name,
      email: user.email,
      pw: user.pw,
    };
  });
  return res.status(200).json(newUsers);
});

//특정 회원 정보 조회
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const currentUser = await User.findById(userId).exec();
    const newUsers = {
      userId: currentUser.userId,
      name: currentUser.name,
      email: currentUser.email,
      pw: currentUser.pw,
    };
    return res.status(200).json(newUsers);
  } catch (err) {
    return res.status(400).json({ errorMessage: '존재하지 않는 회원입니다.' });
  }
});

export default router;
