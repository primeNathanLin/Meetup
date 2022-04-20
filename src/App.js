import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import UpdateMeetupPage from "./pages/UpdateMeetup";
import MeetupDetailPage from "./pages/MeetupDetail";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/meetups/:id" element={<UpdateMeetupPage />} />
        <Route path="/meetup-detail/:id" element={<MeetupDetailPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
