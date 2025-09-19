export interface User {
  id: string;
  email: string;
  first_name: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}
