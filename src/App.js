import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landeing";


function App() {
  return (
<BrowserRouter>

<Routes>
<Route path="/" element={<Landing/>}/>


</Routes>
</BrowserRouter>
    
  );
}

export default App;
