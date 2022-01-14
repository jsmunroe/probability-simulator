import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Classroom from './sims/Classroom';
import Monty from './sims/Monty';
import Test from './sims/Test';

function App() {

    return <div className="app">
        <BrowserRouter>
            <Layout>
                <Routes>
                <Route exact path="probability-simulator/monty" element={<Monty/>}></Route>
                <Route exact path="probability-simulator/classroom" element={<Classroom/>}></Route>
                <Route exact path="probability-simulator/test" element={<Test/>}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    </div>
}

export default App;
