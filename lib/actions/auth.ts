'use server';

export const checkEmail = async (email: string): Promise<boolean> => {
  const response = await fetch('http://localhost:3333/api/v1/auth/check-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })

  const data = await response.json()
  return data.isEmailExists
}

interface LoginData {
  email: string
  password: string
}

export const login = async (data: LoginData) => {
  const response = await fetch('http://localhost:3333/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const json = await response.json()
  return json
}