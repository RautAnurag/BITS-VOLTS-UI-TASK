import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HeroHeader from './components/HeroHeader';
import LogoMarquee from './components/LogoMarquee';
import Services from './components/Services';
import ServicesSection from './components/ServicesSection';
import Card from './components/Card';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Heading from './components/Heading';
import Accordion from './components/Accordion';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className=''>
      <Landing/>
      <Heading
        title="Services"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
      <Card/>
      <Heading
         title="Our Working Process"
         text="Step-by-Step Guide to Achieving Your Business Goals"
         textWidth="w-[292px]"
         />
      <Accordion/>
      <Heading
         title="Testimonials"
         text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
         textWidth="w-[473px]"
         /> 
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
