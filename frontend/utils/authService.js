export async function login() {
  const data = await fetch("http://localhost:3000/api/auth/google");
  return data;
}

export async function logout() {
  const data = await fetch("http://localhost:3000/api/auth/logout");
  return data;
}
