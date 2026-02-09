export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}