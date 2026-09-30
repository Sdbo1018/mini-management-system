const validPassword = await bcrypt.compare(
  password,
  user.password
);

const token = jwt.sign(
  {
    id: user._id,
    role: user.role
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1h"
  }
);