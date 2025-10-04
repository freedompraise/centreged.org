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
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Capacity Building Institute',
    children: [
      {
        name: 'Faculty & Executive Development',
        path: '/operations/capacity-building#certifications',
      },
      {
        name: 'Corporate & Institutional Training',
        path: '/operations/corporate-training',
      },
      {
        name: 'Mentorship & Career Development',
        path: '/operations/mentorship-career-development',
      },
    ],
  },
  {
    name: 'Diplomacy & International Relations',
    children: [
      {
        name: 'Stakeholder Engagement & Policy Advocacy',
        path: '/operations/diplomacy-stakeholder-engagement',
      },
      {
        name: 'High-Level Forums',
        path: '/operations/diplomacy-high-level-forums',
      },
      {
        name: 'International Partnerships',
        path: '/operations/diplomacy#strategic-partnerships',
      },
    ],
  },
  {
    name: 'Independent Research Organization',
    children: [
      {
        name: 'Policy Research & Analysis',
        path: '/operations/policy-research',
      },
      {
        name: 'Knowledge Dissemination',
        path: '/operations/knowledge-dissemination',
      },
      {
        name: 'Advisory Services',
        path: '/operations/advisory-services',
      },
    ],
  },
  { name: 'Research Publications', path: '/publications' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isMenuOpen) setExpandedSection(null);
  };

  const toggleSection = (name) => {
    setExpandedSection((prev) => (prev === name ? null : name));
  };

  const navbarClasses = `fixed w-full z-50 transition duration-300 bg-primary ${
    isScrolled || isMobile || isMenuOpen ? 'shadow-lg py-2' : 'py-4'
  }`;

  const triggerStyle = cn(
    'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-white transition-colors',
    'bg-transparent hover:text-gold hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent'
  );


  const mobileMenu = (
    <div
      className={`${
        isMenuOpen ? 'flex' : 'hidden'
      } flex-col bg-primary absolute top-full left-0 right-0 shadow-xl`}
    >
      {navLinks.map((link) =>
        link.children ? (
          <div key={link.name} className="text-white">
            <button
              className="flex justify-between items-center w-full px-6 py-3 hover:bg-primary-dark transition-colors"
              onClick={() => toggleSection(link.name)}
            >
              <span>{link.name}</span>
              <ChevronDown
                className={`transform transition-transform ${
                  expandedSection === link.name ? 'rotate-180' : ''
                }`}
                size={20}
              />
            </button>
            {expandedSection === link.name && (
              <div className="pl-8 space-y-2 bg-primary-dark pb-2">
                {link.children.map((child) => (
                  <Link
                    key={child.name}
                    to={child.path}
                    className="block py-2 text-white hover:text-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={link.name}
            to={link.path}
            className="px-6 py-3 text-white hover:bg-primary-dark transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        )
      )}
    </div>
  );

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo variant="icon" />
          </Link>

          <div className="hidden lg:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    {link.children ? (
                      <>
                        <NavigationMenuTrigger className={triggerStyle}>
                          {link.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {link.children.map((child, idx) => (
                              <li
                                key={child.name}
                                className={idx === 0 ? 'row-span-3' : ''}
                              >
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={child.path}
                                    className={`flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-primary to-primary-dark p-6 no-underline outline-none focus:shadow-md ${
                                      idx === 0
                                        ? ''
                                        : 'space-y-1 p-3 leading-none transition-colors hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary'
                                    }`}
                                  >
                                    <div className="mt-4 mb-2 text-lg font-medium text-white">
                                      {child.name}
                                    </div>
                                    {idx === 0 && (
                                      <p className="text-sm leading-tight text-white/90">
                                        {child.name}
                                      </p>
                                    )}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link to={link.path} className={triggerStyle}>
                        {link.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="lg:hidden">
            <button
              className="text-white p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
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
