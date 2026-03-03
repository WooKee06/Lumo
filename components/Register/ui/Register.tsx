'use client';

import { supabase } from '@/utils/supabase';
import { useState } from 'react';
import s from './Register.module.scss';
import { redirect, RedirectType, usePathname } from 'next/navigation';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (email == '' || password == '') {
      setLoading(false);
      return setMessage('Поле не может быть пустое');
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Проверь почту для подтверждения');
      redirect('/', RedirectType.push);
    }

    setLoading(false);
  };

  return (
    <form className={s.form} onSubmit={handleRegister}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={loading}>{loading ? 'Loading...' : 'Register'}</button>

      {message && <p>{message}</p>}
    </form>
  );
}
