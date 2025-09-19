import { HeroGridCard } from './HeroGridCard';

export const HeroGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {/* Hero Card 1 - Superman */}
      <HeroGridCard
        active={true}
        universe="DC"
        name="Superman"
        realName="Clark Kent"
        description="The Man of Steel, a powerful hero from Krypton."
        powers={['Flight', 'Super Strength', 'Heat Vision']}
        firstAppearance={1938}
        strength={100}
        intelligence={80}
        speed={90}
        durability={100}
        range="Hero"
        team="Justice League"
      />

      <HeroGridCard
        active={true}
        universe="DC"
        name="Batman"
        realName="Bruce Wayne"
        description="The Dark Knight of Gotham City, using fear as a weapon against crime and corruption."
        powers={['Martial Arts', 'Intellect', 'Gadgets']}
        firstAppearance={1939}
        strength={60}
        intelligence={100}
        speed={60}
        durability={80}
        range="Hero"
        team="Justice League"
      />

      <HeroGridCard
        name="Thanos"
        realName="Thanos"
        description="The Mad Titan, a powerful being obsessed with balance and control."
        powers={['Super Strength', 'Immortality', 'Regeneration']}
        firstAppearance={1973}
        strength={100}
        intelligence={90}
        speed={80}
        durability={90}
        range="Villain"
        team="Son of Thanos"
        universe="Marvel"
        active={true}
      />

      <HeroGridCard
        name="Spider-Man"
        realName="Peter Parker"
        description="Your friendly neighborhood Spider-Man, with great power comes great responsibility."
        powers={['Wall-Crawling', 'Spider-Sense', 'Super Strength']}
        firstAppearance={1962}
        strength={70}
        intelligence={90}
        speed={80}
        durability={70}
        range="Hero"
        team="Avengers"
        universe="Marvel"
        active={true}
      />

      <HeroGridCard
        name="Iron Man"
        realName="Tony Stark"
        description="Billionaire genius inventor who uses his technology to protect the world."
        powers={['Powered Armor', 'Genius Intellect']}
        firstAppearance={1963}
        strength={80}
        intelligence={100}
        speed={70}
        durability={80}
        range="Hero"
        team="Avengers"
        universe="Marvel"
        active={false}
      />

      <HeroGridCard
        name="Deadpool"
        realName="Wade Wilson"
        description="The Merc with a Mouth, an unpredictable anti-hero with accelerated healing powers."
        powers={['Regeneration', 'Expert Marksman', 'Swordsmanship']}
        firstAppearance={1991}
        strength={70}
        intelligence={80}
        speed={80}
        durability={90}
        range="Anti-Hero"
        team="X-Force"
        universe="Marvel"
        active={true}
      />
    </div>
  );
};
