import {About, Nav,Home,Project, Service,Experience,Footer,Contact
 } from './index'

const App = () => {
  return (
    <div>
      <div>
        <Nav />
        <Home />
        <About />
        <Service />
        <Project />
       <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
