import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Toaster} from 'react-hot-toast';
import Navbar from "./components/Navbar";
import ListSpells from "./pages/ListSpells";
import SpellDetails from "./pages/SpellDetails";
import FavouriteSpells from "./pages/FavouriteSpells";

function App() {
    return (
        <div className="App">
            <Toaster/>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<ListSpells/>}/>
                    <Route path="/favourite" element={<FavouriteSpells/>}/>
                    <Route path="/spells/:index" element={<SpellDetails/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
