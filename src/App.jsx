import './App.css';
import HeroPage from '../components/HeroPage.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import ResponsiveCards from '../components/ResponsiveImageCards.jsx';
import TypingAnimation from '../components/TypingAnimation.jsx';
import projectsData from '../data/projects(default).json';

function App() {
  const cards = projectsData.map((project) => {
    return {
      title: project.title,
      content: project.description,
      technologies: project.technologies,
      image: project.image,
      url: project.url,
    };
  });

  const typingSpeed = 200;
  const deletingSpeed = 100;

  return (
    <div>
      <HeroPage
        title="My name is David Cannan!"
        subtitle="Explore my portfolio and learn more about me."
        backgroundImage="https://example.com/hero-bg.jpg"
      />
      {/* <TypingAnimation typingSpeed={typingSpeed} deletingSpeed={deletingSpeed} /> */}
      {/* <SocialLinks /> */}

      <ResponsiveCards cards={cards} />
    </div>
  );
}

export default App;
