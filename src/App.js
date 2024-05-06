import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Top from './pages/top/Top';
import Page404 from "./pages/404/Page404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top/>}/>
        {/*ログインページ */}
        {/*サインアップページ */}
        {/*商品詳細*/}
        {/*商品投稿 */}
        {/*プロフィール*/}
        {/*アカウント設定 */}
        <Route path="*" element={<Page404/>}/> {/*404ページ */}
      </Routes>
    </Router>
  );
}

export default App;
