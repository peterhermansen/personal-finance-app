'use server';
import argon2 from 'argon2';

export default async function generateHash(pass) {
  const hash = await argon2.hash(pass);
  return hash;
}
