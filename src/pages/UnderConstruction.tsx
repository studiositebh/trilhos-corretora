import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import logoTrilhosFull from '@/assets/logo-trilhos-full.png';

const UnderConstruction = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'paulo' && password === 'trilhoscorretora') {
      localStorage.setItem('trilhos_auth', 'true');
      toast({
        title: "Acesso liberado!",
        description: "Bem-vindo ao preview do site."
      });
      navigate('/preview');
    } else {
      toast({
        title: "Credenciais inválidas",
        description: "Usuário ou senha incorretos.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7f2] via-[#f5f3e8] to-[#e2d37d]/20 flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="text-center mb-8">
        <img 
          src={logoTrilhosFull} 
          alt="Trilhos Corretora de Seguros" 
          className="h-24 w-auto mx-auto"
        />
      </div>

      {/* Main Content */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl max-w-md w-full text-center border border-[#e2d37d]/30">
        <h2 className="text-2xl md:text-3xl font-bold text-[#242d54] mb-4" style={{
          fontFamily: "'Poppins', sans-serif"
        }}>
          Site em Construção
        </h2>
        <p className="text-slate-600 mb-6">
          Estamos preparando algo especial para você. Em breve, uma nova experiência em seguros e proteção.
        </p>

        {/* Decorative Rail Line */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-0.5 bg-[#e2d37d]" />
          <div className="w-3 h-3 rounded-full bg-[#242d54]" />
          <div className="w-24 h-0.5 bg-[#e2d37d]" />
          <div className="w-3 h-3 rounded-full bg-[#242d54]" />
          <div className="w-12 h-0.5 bg-[#e2d37d]" />
        </div>

        {!showLogin ? (
          <Button 
            onClick={() => setShowLogin(true)} 
            className="bg-[#242d54] hover:bg-[#2d3a6d] text-white px-6 py-3 rounded-full"
          >
            <Lock className="w-4 h-4 mr-2" />
            Acesso Restrito
          </Button>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <Label htmlFor="username" className="text-slate-700">Usuário</Label>
              <Input 
                id="username" 
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                placeholder="Digite seu usuário" 
                className="mt-1" 
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-slate-700">Senha</Label>
              <div className="relative mt-1">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  placeholder="Digite sua senha" 
                  className="pr-10" 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => setShowLogin(false)} className="flex-1">
                Cancelar
              </Button>
              <Button type="submit" className="flex-1 bg-[#242d54] hover:bg-[#2d3a6d] text-white">
                Entrar
              </Button>
            </div>
          </form>
        )}
      </div>

      {/* Footer */}
      <p className="mt-8 text-slate-500 text-sm">
        © 2024 Trilhos Corretora de Seguros. Todos os direitos reservados.
      </p>
    </div>
  );
};

export default UnderConstruction;