export interface AuthState {
  role: "admin" | "member" | null;
  setRole: (role: "admin" | "member" | null) => void;
}
