import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { useAuth } from '../context/AuthContext';

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    try {
      await login(data.email, data.password);
      navigate('/profile');
    } catch (error) {
      console.error('Login error:', error);
      // In a real app, we would show an error notification here
    }
  };

  return (
    <Section title="Connexion" subtitle="Accédez à votre espace membre FEGESPORT">
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
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
          <div className="mb-6">
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <a href="#" className="text-sm text-primary hover:text-primary-700">
                Mot de passe oublié ?
              </a>
            </div>
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
                  required: "Le mot de passe est requis"
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
          
          {/* Remember Me */}
          <div className="flex items-center mb-6">
            <input
              id="rememberMe"
              type="checkbox"
              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary-300"
              {...register("rememberMe")}
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
              Se souvenir de moi
            </label>
          </div>
          
          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={loading}
          >
            Se connecter
          </Button>
          
          {/* Register Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Pas encore de compte ? <a href="/register" className="text-primary hover:underline font-medium">Inscrivez-vous</a>
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default LoginPage;