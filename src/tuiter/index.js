import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen/home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen/bookmarks-screen";
import ProfileScreen from "./profile-screen/profile-screen";
import WhoToFollowList from "./who-to-follow-list";


function Tuiter() {
 return (
   <div>
     <Nav />
     <div className="row">
       <div className="col-2">
         <NavigationSidebar />
       </div>
       <div className="col-lg-7 col-md-9 col-sm-10 col">
        <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
        </Routes>

       </div>
       <div className="col-3 d-none d-lg-block d-xl-block d-xxl-block">
         <WhoToFollowList />
       </div>
     </div>
   </div>
 );
}
export default Tuiter;