import React from 'react';
import Header from '../partials/Header';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">

      {/* Header */}
      <Header NavBgLight={true} DarkText={true} />

    

    </div>
  );
}

export default Home;