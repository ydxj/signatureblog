import { Route, Routes } from "react-router-dom";
import MoroccoTours from "./Pages/home/Home";

function AppRouter(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<MoroccoTours />} />
            </Routes>
        </div>
    )
}

export default AppRouter