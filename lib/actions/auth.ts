'use server';

type EmailResponse = {
  isEmailExists?: boolean;
  statusCode?: number;
  message?: string;
};

export const validateEmail = async (email: string): Promise<EmailResponse> => {
  const response = await fetch(
    'http://localhost:3333/api/v1/auth/check-email',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }
  ).then((res) => res.json());

  return response;
};

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const createUser = async (data: RegisterData) => {
  const response = await fetch('http://localhost:3333/api/v1/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();
  return json;
};

interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  const response = await fetch('http://localhost:3333/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();
  return json;
};
