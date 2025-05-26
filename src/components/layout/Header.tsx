import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 bg-accent rounded-full"></div>
              <div className="absolute inset-2 bg-secondary rounded-full"></div>
              <div className="absolute inset-4 bg-primary rounded-full"></div>
            </div>
            <span className="font-heading text-xl font-bold text-dark">FEGESPORT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              Accueil
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              À propos
            </NavLink>
            <NavLink to="/governance" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              Gouvernance
            </NavLink>
            <NavLink to="/news" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              Actualités
            </NavLink>
            
            {/* Events Dropdown */}
            <div className="relative">
              <button 
                className="nav-link flex items-center"
                onClick={() => setIsEventsOpen(!isEventsOpen)}
              >
                <span>Événements</span>
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {isEventsOpen && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-1 mt-1">
                  <Link 
                    to="/events" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Tous les événements
                  </Link>
                  <Link 
                    to="/events/live" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Direct
                  </Link>
                </div>
              )}
            </div>
            
            <NavLink to="/partnerships" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              Partenariats
            </NavLink>
            <NavLink to="/resources" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              Ressources
            </NavLink>
          </nav>

          {/* Authentication */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-2 transition-colors"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  ) : (
                    <User size={20} className="text-gray-700" />
                  )}
                  <span className="font-medium">{user?.name?.split(' ')[0]}</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Mon profil
                    </Link>
                    <button 
                      onClick={logout} 
                      className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-2">
                        <LogOut size={16} />
                        <span>Se déconnecter</span>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="text-accent hover:text-accent-700 font-medium">
                  Se connecter
                </Link>
                <Link to="/register" className="btn btn-accent">
                  S'inscrire
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} className="text-dark" />
            ) : (
              <Menu size={24} className="text-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col px-4 py-3">
            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active py-3" : "nav-link py-3"}>
              Accueil
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active py-3" : "nav-link py-3"}>
              À propos
            </NavLink>
            <NavLink to="/governance" className={({isActive}) => isActive ? "nav-link active py-3" : "nav-link py-3"}>
              Gouvernance
            </NavLink>
            <NavLink to="/news" className={({isActive}) => isActive ? "nav-link active py-3" : "nav-link py-3"}>
              Actualités
            </NavLink>
            
            {/* Events Section in Mobile */}
            <div className="py-3">
              <button 
                className="flex items-center justify-between w-full"
                onClick={() => setIsEventsOpen(!isEventsOpen)}
              >
                <span className="nav-link">Événements</span>
                <ChevronDown size={16} className={`transform transition-transform ${isEventsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isEventsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/events" className="block nav-link py-2">
                    Tous les événements
                  </Link>
                  <Link to="/events/live" className="block nav-link py-2">
                    Direct
                  </Link>
                </div>
              )}
            </div>
            
            <NavLink to="/partnerships" className={({isActive}) => isActive ? "nav-link active py-3" : "nav-link py-3"}>
              Partenariats
            </NavLink>
            <NavLink to="/resources" className={({isActive}) => isActive ? "nav-link active py-3" : "nav-link py-3"}>
              Ressources
            </NavLink>
            
            <div className="border-t border-gray-200 mt-3 pt-3">
              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="nav-link py-3 flex items-center">
                    <User size={18} className="mr-2" />
                    Mon profil
                  </Link>
                  <button onClick={logout} className="nav-link py-3 flex items-center w-full text-left">
                    <LogOut size={18} className="mr-2" />
                    Se déconnecter
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-link py-3">
                    Se connecter
                  </Link>
                  <Link to="/register" className="btn btn-accent mt-3">
                    S'inscrire
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};