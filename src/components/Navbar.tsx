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

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Capacity Building Institute",
    children: [
      {
        name: "Faculty & Executive Development",
        path: "/operations/capacity-building#certifications",
      },
      {
        name: "Corporate & Institutional Training",
        path: "/operations/capacity-building#corporate-training",
      },
      {
        name: "Mentorship & Career Development",
        path: "/operations/capacity-building#mentorship",
      },
    ],
  },
  {
    name: "Diplomacy & International Relations",
    children: [
      {
        name: "Stakeholder Engagement & Policy Advocacy",
        path: "/operations/diplomacy#stakeholder-engagement",
      },
      {
        name: "High-Level Forums",
        path: "/operations/diplomacy#high-level-forums",
      },
      {
        name: "International Partnerships",
        path: "/operations/diplomacy#strategic-partnerships",
      },
    ],
  },
  {
    name: "Independent Research Organization",
    children: [
      {
        name: "Policy Research & Analysis",
        path: "/operations/research#policy-research",
      },
      {
        name: "Knowledge Dissemination",
        path: "/operations/research#knowledge-dissemination",
      },
      {
        name: "Advisory Services",
        path: "/operations/research#advisory-services",
      },

    ],
  },
  {
    name: "Research Publications",
    path: "/publications",
  },
];

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

  const navbarClasses = `fixed w-full z-50 transition- bg-primary  duration-300 ${
    isScrolled || isMobile || isMenuOpen 
      ? 'shadow-lg py-2' 
      : 'py-4'
  }`;

  const navigationMenuTriggerStyle = cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-white hover:text-gold transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50",
  );

  const mobileMenu = (
    <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col bg-primary absolute top-full left-0 right-0 shadow-xl`}>
      {navLinks.map((link) => (
        <div key={link.name} className="text-white">
          {link.children ? (
            <>
              <button 
                className="flex justify-between items-center w-full px-6 py-3 hover:bg-primary-dark transition-colors"
                onClick={() => toggleSection(link.name)}
              >
                <span>{link.name}</span>
                <ChevronDown className={`transform transition-transform ${expandedSection === link.name ? 'rotate-180' : ''}`} size={20} />
              </button>
              {expandedSection === link.name && (
                <div className="pl-8 space-y-2 bg-primary-dark pb-2">
                  {link.children.map((child) => (
                    <Link key={child.name} to={child.path} className="block py-2 text-white hover:text-gold transition-colors pl-4" onClick={() => setIsMenuOpen(false)}>
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link to={link.path} className="px-6 py-3 text-white hover:bg-primary-dark transition-colors" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>
          )}
        </div>
      ))}
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
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    {link.children ? (
                      <>
                        <NavigationMenuTrigger className="hover:text-gold">{link.name}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {link.children.map((child, index) => (
                              <li key={child.name} className={index === 0 ? "row-span-3" : ""}>
                                <NavigationMenuLink asChild>
                                  <Link className={`flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary to-primary-dark p-6 no-underline outline-none focus:shadow-md ${index === 0 ? "" : "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary"}`} to={child.path}>
                                    <div className="mt-4 mb-2 text-lg font-medium text-white">{child.name}</div>
                                    {index === 0 && <p className="text-sm leading-tight text-white/90">Structured learning programs through specialized faculties</p>}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link to={link.path} className={navigationMenuTriggerStyle}>{link.name}</Link>
                    )}
                  </NavigationMenuItem>
                ))}
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