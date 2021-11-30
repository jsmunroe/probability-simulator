import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Classroom from './sims/Classroom';

function App() {

    return <div className="app">
        <BrowserRouter>
            <Layout>
                <Routes>
                <Route exact path="/monty"></Route>
                <Route exact path="/classroom" element={<Classroom/>}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    </div>
}

export default App;
