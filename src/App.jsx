import './App.css'
import HeroPage from './components/HeroPage.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import ResponsiveCards from './components/ResponsiveCards.jsx';
import TypingAnimation from './components/TypingAnimation.jsx';

function App() {
  const cards = [
    {
      title: "Card 1",
      content: "This is the content of Card 1.",
    },
    {
      title: "Card 2",
      content: "This is the content of Card 2.",
    },
    {
      title: "Card 3",
      content: "This is the content of Card 3.",
    },
    {
      title: "Card 4",
      content: "This is the content of Card 4.",
    },
  ];

  const typingSpeed = 150;
  const deletingSpeed = 100;
  
  return (
    <div>
      <HeroPage
        title="Welcome to my website!"
        subtitle="Explore my portfolio and learn more about me."
        backgroundImage="https://example.com/hero-bg.jpg"
      />
      <TypingAnimation typingSpeed={typingSpeed} deletingSpeed={deletingSpeed} />
{/*       <SocialLinks /> */}

      <ResponsiveCards cards={cards} />
    </div>
  );
}

export default App;