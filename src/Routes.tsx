import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { App } from "./pages/App";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Profiles } from "./pages/Profiles";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route index element={<Home />} />
                <Route path="/profiles" element={<Profiles />} />
                <Route path="/profiles/:profileId" element={<Profile />} />
            </Routes>
        </Router>
    )
}