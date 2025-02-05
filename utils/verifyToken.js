import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default async function verifyToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token').value;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.email;
  } catch (error) {
    console.log('Token is invalid or expired', error);
  }
}
