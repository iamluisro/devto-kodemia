import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
}

export default Layout;
