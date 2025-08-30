import React from 'react';
import { useSelector } from 'react-redux';
import MyContent from '../../conponents/Content/Content';
import { RootState } from '@/store';

const Home = () => {
  const { myTheme } = useSelector((state: RootState) => state.myThemes);

  return (
    <>
      <div
        className={myTheme}
        style={{
          width: '100%',
          height: '349vh',
          margin: '0',
          padding: '0',
          border: '0',
          outline: '0',
          background: 'transparen',
          display: 'flex',
        }}
      >
        <MyContent />
      </div>
    </>
  );
};

export default Home;
