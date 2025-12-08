import { lazy, Suspense } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

// Lazy load below-the-fold sections
const Experience = lazy(() => import('./components/Experience/Experience'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Contact = lazy(() => import('./components/Contact/Contact'));

// Loading fallback component
const SectionLoader = () => (
  <div className="section-loader">
    <div className="section-loader__spinner"></div>
  </div>
);

const App = () => {
  return (
    <div className="app">
      <Header />

      <main>
        <About />
        <Suspense fallback={<SectionLoader />}>
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
