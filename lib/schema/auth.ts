import { z } from 'zod';

/**
 * Schema for login form.
 * @typedef {Object} LoginFormData
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 */
export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
});

/**
 * Schema for email check.
 * @typedef {Object} EmailData
 * @property {string} email - The email to be checked.
 */
export const emailSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
});

/**
 * Schema for full register form.
 * @typedef {Object} RegisterFormData
 * @property {string} fullname - The full name of the user.
 * @property {string} password - The password of the user.
 * @property {string} confirmPassword - The confirmation of the password.
 */
export const RegisterFormSchema = z.object({
  fullName: z.string().min(1, { message: 'Please enter your name.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
  confirmPassword: z.string().min(8, { message: 'Please confirm your password.' }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords doesn't match.",
  path: ['confirmPassword'],
})
