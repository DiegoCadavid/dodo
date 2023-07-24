export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  email: string;
  username: string;
  role: UserRole;
  description: string | null;
  image: string | null,
  banner: string | null;
}