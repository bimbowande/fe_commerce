import React from 'react';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { IntroSection } from './components/IntroSection/IntroSection';
import { ServiceSection } from './components/ServicesSection/ServiceSection';
import { LayoutContent } from './components/Layout/style';



function App() {
  return (
    <Layout>
       <LayoutContent>
          <IntroSection/>
          <ServiceSection/>
       </LayoutContent>
    
    </Layout>
  );
}

export default App;
