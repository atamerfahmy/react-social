import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import BottomSection from './components/BottomSection';
import Header from './components/Header';
import TopSection from './components/TopSection';
import { colors as colorPalette } from "./constants";
import { ThemeContext } from './context';

function App() {

  const theme = useSelector((state) => state.colorTheme);
  const colors = colorPalette[theme.value];

  return (
    <ThemeContext.Provider value={colors}>
      <div className='cont'>
        <div className="App">
          <Header />
          <div style={{ backgroundColor: colors.BG }}>
            <TopSection />
            <BottomSection />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
