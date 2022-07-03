import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Row, Col, Divider } from 'antd';

import Main from './components/pages/main';
import Header from './components/templetes/Header';
import Board from './components/pages/board';
import BoardSide from './components/pages/boardSide';
import Home from './components/pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Row>
          <Col flex={24}>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col flex={1}>
            <Routes>
              <Route path="/board" element={<BoardSide />} />
            </Routes>
          </Col>
          <Col flex={10}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/main" element={<Main />} />
              <Route path="/board" element={<Board />} />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
