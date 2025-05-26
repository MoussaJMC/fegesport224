import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, User, Mail, Lock, CheckCircle, Trophy, Gamepad2, Users } from 'lucide-react';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { useAuth } from '../context/AuthContext';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
};

const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register: registerUser, loading } = useAuth();
  const navigate = useNavigate();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    watch
  } = useForm<FormData>();
  
  const password = watch("password", "");

  const onSubmit = async (data: FormData) => {
    try {
      await registerUser(data.name, data.email, data.password);
      navigate('/profile');
    } catch (error) {
      console.error('Registration error:', error);
      // In a real app, we would show an error notification here
    }
  };

  return (
    <>
      <Section title="Créer un compte" subtitle="Rejoignez la communauté esport guinéenne">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <User size={18} />
                </div>
                <input
                  id="name"
                  type="text"
                  className="w-full py-2.5 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                  placeholder="John Doe"
                  {...register("name", { 
                    required: "Le nom est requis", 
                    minLength: {
                      value: 2,
                      message: "Le nom doit contenir au moins 2 caractères"
                    } 
                  })}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>
            
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  id="email"
                  type="email"
                  className="w-full py-2.5 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                  placeholder="exemple@email.com"
                  {...register("email", { 
                    required: "L'email est requis", 
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Adresse email invalide"
                    } 
                  })}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            
            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full py-2.5 pl-10 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                  placeholder="••••••••"
                  {...register("password", { 
                    required: "Le mot de passe est requis", 
                    minLength: {
                      value: 8,
                      message: "Le mot de passe doit contenir au moins 8 caractères"
                    } 
                  })}
                />
                <button 
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
            
            {/* Confirm Password Field */}
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full py-2.5 pl-10 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                  placeholder="••••••••"
                  {...register("confirmPassword", { 
                    required: "Veuillez confirmer votre mot de passe", 
                    validate: value => value === password || "Les mots de passe ne correspondent pas" 
                  })}
                />
                <button 
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>
            
            {/* Terms and Conditions */}
            <div className="mb-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeTerms"
                    type="checkbox"
                    className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary-300"
                    {...register("agreeTerms", { required: "Vous devez accepter les conditions d'utilisation" })}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeTerms" className="text-gray-600">
                    J'accepte les <a href="#" className="text-primary hover:underline">conditions d'utilisation</a> et la <a href="#" className="text-primary hover:underline">politique de confidentialité</a>
                  </label>
                </div>
              </div>
              {errors.agreeTerms && (
                <p className="mt-1 text-sm text-red-600">{errors.agreeTerms.message}</p>
              )}
            </div>
            
            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              fullWidth
              isLoading={loading}
            >
              Créer mon compte
            </Button>
            
            {/* Login Link */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Déjà un compte ? <a href="/login" className="text-primary hover:underline font-medium">Connectez-vous</a>
              </p>
            </div>
          </form>
        </div>
      </Section>
      
      {/* Benefits Section */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">Avantages de l'adhésion</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Trophy size={24} className="text-primary" />,
                title: "Participation aux compétitions officielles",
                description: "Accédez à toutes les compétitions organisées par la FEGESPORT et ses partenaires."
              },
              {
                icon: <Gamepad2 size={24} className="text-primary" />,
                title: "Accès aux centres d'entraînement",
                description: "Bénéficiez de tarifs préférentiels dans nos centres d'entraînement à travers le pays."
              },
              {
                icon: <Users size={24} className="text-primary" />,
                title: "Réseau communautaire",
                description: "Rejoignez une communauté active de joueurs, organisateurs et passionnés d'esport."
              },
              {
                icon: <CheckCircle size={24} className="text-primary" />,
                title: "Reconnaissance officielle",
                description: "Obtenez une carte de membre officielle et la possibilité de représenter la Guinée."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex">
                <div className="mr-4 mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default RegisterPage;