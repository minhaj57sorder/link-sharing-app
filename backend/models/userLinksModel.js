import mongoose from 'mongoose';
const userLinkschema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    links: [
      {
        link: {
          type: String,
          required:true,
        },
        linkType: {
          type: String,
          required:true,
        },
      },
    ],
    userLinksId: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);
const UserLinks =
  mongoose.models?.UserLinks || mongoose.model('UserLinks', userLinkschema);
export default UserLinks;
