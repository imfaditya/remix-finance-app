import type { LinksFunction } from '@remix-run/node';
import AuthForm from '~/components/auth/AuthForm';
import authStyle from '~/styles/auth.css';

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: authStyle }
];

export default function AuthPage() {
  return (
    <AuthForm />
  )
}