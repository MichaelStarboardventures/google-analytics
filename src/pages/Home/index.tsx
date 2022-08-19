import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div
      onClick={() => {
        gtag('event', 'click_event', { pwd: 123353535 });
      }}
    >
      Home Page
    </div>
  );
};

export default HomePage;
