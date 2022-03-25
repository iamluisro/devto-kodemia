import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Layout from './components/Layout';
import LayoutWChildren from './components/layout-with-children';
import Home from './pages';
import WriterPage from './pages/writer-page';
import CreateAccount from './pages/create-account';
import PostPage from './pages/post';

function App() {
  return (
    <div className="App">
      <LayoutWChildren>
        <Routes>
          {/* <Route element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/writers/:writerId" element={<WriterPage />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/:postId" element={<PostPage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          {/* </Route> */}
        </Routes>
      </LayoutWChildren>
    </div>
  );
}

export default App;
