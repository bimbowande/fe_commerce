import React from 'react';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { IntroSection } from './components/IntroSection/IntroSection';
import { ServiceSection } from './components/ServicesSection/ServiceSection';
import { LayoutContent } from './components/Layout/style';
import { Projects } from './components/Projects/Projects';
import { CaseStudy } from './components/CaseStudy/CaseStudy';



function App() {
  return (
    <Layout>
       <LayoutContent>
          <IntroSection/>
          <ServiceSection/>
          <Projects/>
          <CaseStudy/>
       </LayoutContent>
    </Layout>
  );
}

export default App;
