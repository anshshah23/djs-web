import { motion } from 'framer-motion';
import DJSLogo from '../assets/DJSLogo.png';
import DJSNSSLogo from '../assets/DJSNSSLogo.png';
import NSSLogo from '../assets/NSSLogo.png';
import CorePic from '../assets/Core.jpg';
import ImageCarousel from '../components/ImageCarousel';
import SneakPeek from '../components/SneakPeek';
import Team from '../components/Team';

import BandraBC from '../assets/Events/BandraBC.png';
import CyberSavvy from '../assets/Events/CyberSavvy.png';
import AntiDowry from '../assets/Events/AntiDowry.png';
import yarana1 from '../assets/Events/Yaarana/yarana1.jpg';

import VolunteerHomePage from '../components/volunteer/VolunteerHomePage';

const images = [BandraBC, yarana1, CyberSavvy, AntiDowry];
const captions = [
  'Bandra Beach Cleanup',
  'Friendship Day with Kids',
  'CyberSavvy: CyberSecurity Teaching to Kids',
  'Anti Dowry Awareness Event',
];
const data = [
  { src: DJSNSSLogo, alt: 'NSS DJSCE Logo', link: '/' },
  { src: DJSLogo, alt: 'DJS Logo', link: 'https://djsce.ac.in/' },
  { src: NSSLogo, alt: 'NSS Logo', link: 'https://nss.gov.in/' },
];
const funcs = [
  { name: 'SneakPeek', component: <SneakPeek /> },
  { name: 'VolunteerHomePage', component: <VolunteerHomePage /> },
  { name: 'Team', component: <Team /> },
  { name: 'ImageCarousel', component: <ImageCarousel images={images} captions={captions} /> },
];
const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Parallax Section */}
      <motion.div
        className="w-full h-screen bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${CorePic})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full h-full bg-black bg-opacity-30 flex flex-col items-center justify-center">
          <div className='flex flex-row justify-evenly items-center'>
            {
              data.map((d, idx) => (
                <a href={d.link} target='_blank' rel='noreferrer' key={idx}>
                  <motion.a
                    key={idx}
                    href={d.link}
                    target='_blank'
                    rel='noreferrer'
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  >
                    <img src={d.src} alt={d.alt} className="h-20 mb-10" />
                  </motion.a>
                </a>
              ))
            }
            <motion.img
              src={DJSNSSLogo}
              alt="NSS DJSCE Logo"
              className="h-20 mb-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
            <motion.img
              src={DJSLogo}
              alt="NSS DJSCE Logo"
              className="h-20 mb-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
            <motion.img
              src={NSSLogo}
              alt="NSS Logo"
              className="h-20 mb-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
          </div>
          <motion.h1
            className="text-xl md:text-5xl sm:text-3xl font-bold mb-10 mx-2 text-center text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            NSS Dwarkadas J. Sanghvi College of Engineering
          </motion.h1>
          <motion.p
            className="text-md md:text-2xl text-center text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="w-full border-white mb-5 border-b-4"></div>
            FOR YOU, WITH YOU, ALWAYS!
          </motion.p>
        </div>
      </motion.div>
      {
        funcs.map((func, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {func.component}
          </motion.div>
        ))
      }
    </div>
  );
};

export default Home;
