
import Layout from './Layout/Layout';
import './app.css'
import React, { Suspense } from 'react';
import './i18n'


function App() {
  return (
    <Suspense fallback={'Loading..'}>
      <div className="App">
        <Layout/>
      </div>
    </Suspense>
  );
}

export default App;
