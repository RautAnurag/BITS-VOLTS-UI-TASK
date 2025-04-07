
    import HeroHeader from "./HeroHeader";
    import LogoMarquee from "./LogoMarquee";
    import NavigationBar from "./NavigationBar";
    const Landing = () => {
        return (
          <header className="w-full max-w-[1440px] mx-auto px-[20px] desktop:px-[100px] py-4 flex flex-col gap-[50px]">
            <NavigationBar />
            <HeroHeader />
            <LogoMarquee />
          </header>
        );
      };
      
    export default Landing;