import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Top from "./pages/Top";
import Page404 from "./pages/Page404";
import ProductPost from "./pages/ProductPost";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
        {/*ログインページ */}
        {/*サインアップページ */}
        {/*商品詳細*/}
        {/*商品投稿 */}
        <Route path="/productpost" element={<ProductPost />} />
        <Route path="/profile" element={<Profile />} />
        {/*プロフィール*/}
        {/*アカウント設定 */}
        <Route path="*" element={<Page404 />} /> {/*404ページ */}
      </Routes>
    </Router>
  );
}

export default App;
