import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ID: {
    type: String,
    required: true,
  },
  pw: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
});

//MongoDB에 저장되지 않은 속성
UserSchema.virtual('userId').get(function () {
  return this._id.toHexString();
});
UserSchema.set('toJSON', {
  virtuals: true,
});

// 모델을 생성하여, 외부로 내보냅니다.
export default mongoose.model('User', UserSchema);
