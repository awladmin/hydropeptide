'use client';

import styles from './page.module.css';

export default function Page() {
  const handleSignUp = () => {
    alert('TODO: Wire up Sign Up (e.g., open a form or route to /signup)');
  };
  const handleRegister = () => {
    alert('TODO: Wire up Register (e.g., open a form or route to /register)');
  };

  return (
    <main className={styles.wrap}>
      <section className={styles.card}>
        <h1 className={styles.title}>HydroPeptide Learning Lab</h1>
        <div className={styles.tag}>Your gateway to pro education & product mastery</div>

        <p>
          Welcome! This lightweight landing page is built with Next.js (App Router) and CSS Modules.
          It’s optimized for quick edits offline and simple deployments on Vercel when you’re back online.
        </p>

        <div className={styles.ctaRow}>
          <button className={`${styles.btn} ${styles.primary}`} onClick={handleSignUp}>
            Sign up
          </button>
          <button className={`${styles.btn} ${styles.secondary}`} onClick={handleRegister}>
            Register
          </button>
        </div>

        <p className={styles.small}>
          Tip: Replace the alerts with your real flows later, or link these buttons to routes like <code>/signup</code> and <code>/register</code>.
        </p>
      </section>
    </main>
  );
}
