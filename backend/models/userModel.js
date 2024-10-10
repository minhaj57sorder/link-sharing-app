import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose';
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: '/images/upload-placeholder.jpg'
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        default: [],
      },
    ],
    permissions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Permission',
        default: [],
      },
    ],
    userId: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password);
};
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});
const User = mongoose.models?.User || mongoose.model('User', userSchema);
export default User;
