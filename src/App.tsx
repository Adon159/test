import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/Searchbar';
import CourseGrid from './components/CourseGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
      <SearchBar />
      <main className="flex-1">
        <CourseGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;