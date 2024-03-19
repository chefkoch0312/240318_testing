"use client"
import Link from 'next/link'
import useAuthentication from './components/useAuthentication';
import styles from "./page.module.css";
import myHelper from '@/public/assets/js/myHelper';

export default function Page() {
  const { user, isLoading, login, logout } = useAuthentication();
  const blubb = myHelper();

  const handleLogin1 = () => {
    login('benutzername_mit_passwort', 'geheim');
  };
  const handleLogin2 = () => {
    login('benutzername_ohne_passwort');
  };
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <main>
        <div className="App">
          <h1>App/Index</h1>
          <h2>{blubb}</h2>
          <div>
            {isLoading ? (
              <p>Authentifizierung läuft...</p>
            ) : user ? (
              <>
                <p>Eingeloggt als: {user.username}</p>
                <button onClick={handleLogout}>Ausloggen</button>
              </>
            ) : (
              <>
                <p>Nicht eingeloggt</p>
                <button onClick={handleLogin1}>Einloggen1</button>
                &nbsp;
                <button onClick={handleLogin2}>Einloggen2</button>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
