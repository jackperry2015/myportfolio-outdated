import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color"title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Oxygen', fontWeight: 'bold'}}
         to="/">Home</Link>} scroll>
            <Navigation className="header-navigation">
                <Link style={{color: '#3945D2', fontSize: '20px', fontFamily: 'Oxygen', fontWeight: 'bold'}}to="/resume">Resume</Link>
                <Link style={{color: '#3945D2', fontSize: '20px', fontFamily: 'Oxygen', fontWeight: 'bold'}}to="/projects">Projects</Link>
                <Link style={{color: '#3945D2', fontSize: '20px', fontFamily: 'Oxygen', fontWeight: 'bold'}}to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{fontSize: '30px', textDecoration: 'none', color: '#3945D2', fontFamily: 'Oxygen', fontWeight: 'bold'}} to="/">Home</Link>}>
            <Navigation>
                <Link style={{color: '#3945D2', fontSize: '20px', fontFamily: 'Oxygen', fontWeight: 'bold'}}to="/resume">Resume</Link>
                <Link style={{color: '#3945D2', fontSize: '20px', fontFamily: 'Oxygen', fontWeight: 'bold'}}to="/projects">Projects</Link>
                <Link style={{color: '#3945D2', fontSize: '20px', fontFamily: 'Oxygen', fontWeight: 'bold'}}to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main>Test</Main>
        </Content>
    </Layout>
</div>
  );
}

export default App;
