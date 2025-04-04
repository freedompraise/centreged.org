import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setExpandedSection(null);
  };

  const toggleSection = (section) => {
    setExpandedSection(prev => prev === section ? null : section);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || isMobile || isMenuOpen 
      ? 'bg-primary shadow-lg py-2' 
      : 'bg-transparent py-4'
  }`;

  const navigationMenuTriggerStyle = cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-white hover:text-gold transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50",
  );

  const mobileMenu = (
    <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col bg-primary absolute top-full left-0 right-0 shadow-xl`}>
      <Link to="/" className="px-6 py-3 text-white hover:bg-primary-dark transition-colors" onClick={() => setIsMenuOpen(false)}>
        Home
      </Link>
      <Link to="/about" className="px-6 py-3 text-white hover:bg-primary-dark transition-colors" onClick={() => setIsMenuOpen(false)}>
        About
      </Link>

      <div className="text-white">
        <button 
          className="flex justify-between items-center w-full px-6 py-3 hover:bg-primary-dark transition-colors"
          onClick={() => toggleSection('capacity')}
        >
          <span>Capacity Building Institute</span>
          <ChevronDown className={`transform transition-transform ${expandedSection === 'capacity' ? 'rotate-180' : ''}`} size={20} />
        </button>
        {expandedSection === 'capacity' && (
          <div className="pl-8 space-y-2 bg-primary-dark pb-2">
            <Link to="/operations/capacity-building#faculty" className="block py-2 text-white hover:text-gold transition-colors pl-4" onClick={() => setIsMenuOpen(false)}>
              Faculty & Executive Development
            </Link>
            <Link to="/operations/capacity-building#corporate-training" className="block py-2 text-white hover:text-gold transition-colors pl-4" onClick={() => setIsMenuOpen(false)}>
              Corporate & Institutional Training
            </Link>
            <Link to="/operations/capacity-building#mentorship" className="block py-2 text-white hover:text-gold transition-colors pl-4" onClick={() => setIsMenuOpen(false)}>
              Mentorship & Career Development
            </Link>
          </div>
        )}
      </div>

      <div className="text-white">
        <button 
          className="flex justify-between items-center w-full px-6 py-3 hover:bg-primary-dark transition-colors"
          onClick={() => toggleSection('diplomacy')}
        >
          <span>Diplomacy & International Relations</span>
          <ChevronDown className={`transform transition-transform ${expandedSection === 'diplomacy' ? 'rotate-180' : ''}`} size={20} />
        </button>
        {expandedSection === 'diplomacy' && (
          <div className="pl-8 space-y-2 bg-primary-dark pb-2">
            <Link to="/operations/diplomacy#stakeholder-engagement" className="block py-2 text-white hover:text-gold transition-colors pl-4" onClick={() => setIsMenuOpen(false)}>
              Stakeholder Engagement
            </Link>
            <Link to="/operations/diplomacy#high-level-forums" className="block py-2 text-white hover:text-gold transition-colors pl-4" onClick={() => setIsMenuOpen(false)}>
              High-Level Forums
            </Link>
            <Link to="/operations/diplomacy#international-partnerships" className="block py-2 text-white hover:text-gold transition-colors pl-4" onClick={() => setIsMenuOpen(false)}>
              International Partnerships
            </Link>
          </div>
        )}
      </div>

      <div className="text-white">
        <button 
          className="flex justify-between items-center w-full px-6 py-3 hover:bg-primary-dark transition-colors"
          onClick={() => toggleSection('research')}
        >
          <span>Independent Research Organization</span>
          <ChevronDown className={`transform transition-transform ${expandedSection === 'research' ? 'rotate-180' : ''}`} size={20} />
        </button>
        {expandedSection === 'research' && (
          <div className="pl-8 space-y-2 bg-primary-dark pb-2">
            <Link to="/operations/research#policy-research" className="block py-2 text-white hover:text-gold transition-colors pl-4" onClick={() => setIsMenuOpen(false)}>
              Policy Research & Analysis
            </Link>
            <Link to="/operations/research#knowledge-dissemination" className="block py-2 text-white hover:text-gold transition-colors pl-4" onClick={() => setIsMenuOpen(false)}>
              Knowledge Dissemination
            </Link>
            <Link to="/operations/research#advisory-services" className="block py-2 text-white hover:text-gold transition-colors pl-4" onClick={() => setIsMenuOpen(false)}>
              Advisory Services
            </Link>
            <Link to="/operations/research#mentorship" className="block py-2 text-white hover:text-gold transition-colors pl-4" onClick={() => setIsMenuOpen(false)}>
              Mentorship Programs
            </Link>
          </div>
        )}
      </div>

      <Link to="/publications" className="px-6 py-3 text-white hover:bg-primary-dark transition-colors" onClick={() => setIsMenuOpen(false)}>
        Research Publications
      </Link>
    </div>
  );

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/"><Logo variant="icon"/></Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={navigationMenuTriggerStyle}>Home</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className={navigationMenuTriggerStyle}>About</Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-gold">Capacity Building Institute</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary to-primary-dark p-6 no-underline outline-none focus:shadow-md" to="/operations/capacity-building#faculty">
                            <div className="mt-4 mb-2 text-lg font-medium text-white">Faculty & Executive Development</div>
                            <p className="text-sm leading-tight text-white/90">Structured learning programs through specialized faculties</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link to="/operations/capacity-building#corporate-training" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary">
                          <div className="text-sm font-medium leading-none">Corporate Training</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Customized programs for organizations</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/operations/capacity-building#mentorship" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary">
                          <div className="text-sm font-medium leading-none">Career Development</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Next generation leadership preparation</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-gold">Diplomacy & International Relations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary to-primary-dark p-6 no-underline outline-none focus:shadow-md" to="/operations/diplomacy#high-level-forums">
                            <div className="mt-4 mb-2 text-lg font-medium text-white">High-Level Forums</div>
                            <p className="text-sm leading-tight text-white/90">Facilitating continental dialogues and collaborations</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link to="/operations/diplomacy#stakeholder-engagement" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary">
                          <div className="text-sm font-medium leading-none">Stakeholder Engagement</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Public-private sector collaborations</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/operations/diplomacy#international-partnerships" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary">
                          <div className="text-sm font-medium leading-none">Global Partnerships</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Strategic international alliances</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-gold">Independent Research Organization</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary to-primary-dark p-6 no-underline outline-none focus:shadow-md" to="/operations/research#policy-research">
                            <div className="mt-4 mb-2 text-lg font-medium text-white">Research & Policy Analysis</div>
                            <p className="text-sm leading-tight text-white/90">Evidence-based solutions for governance challenges</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link to="/operations/research#policy-research" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary">
                          <div className="text-sm font-medium leading-none">Policy Research</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Leadership and economic policy analysis</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/operations/research#knowledge-dissemination" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary">
                          <div className="text-sm font-medium leading-none">Knowledge Sharing</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Research papers and policy briefs</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/operations/research#advisory-services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary">
                          <div className="text-sm font-medium leading-none">Advisory Services</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Institutional recommendations</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/publications" className={navigationMenuTriggerStyle}>Research Publications</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="md:hidden">
            <button className="text-white p-2" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMobile && mobileMenu}
      </div>
    </nav>
  );
};

export default Navbar;