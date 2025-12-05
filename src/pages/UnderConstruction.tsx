import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Train, Lock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
const UnderConstruction = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
  return <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex flex-col items-center justify-center p-6">
      {/* Animated Train Icon */}
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
          <Train className="w-12 h-12 text-white" />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      </div>

      {/* Logo */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight" style={{
        fontFamily: "'Poppins', sans-serif"
      }}>
          TRILHOS
        </h1>
        <p className="text-sm text-slate-600 tracking-[0.3em] uppercase mt-1" style={{
        fontFamily: "'Poppins', sans-serif"
      }}>
          Corretora de Seguros
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl max-w-md w-full text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4" style={{
        fontFamily: "'Poppins', sans-serif"
      }}>
          Site em Construção
        </h2>
        <p className="text-slate-600 mb-6">
          Estamos preparando algo especial para você. Em breve, uma nova experiência em seguros e proteção.
        </p>

        {/* Decorative Rail Line */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-0.5 bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-24 h-0.5 bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-12 h-0.5 bg-amber-400" />
        </div>

        {!showLogin ? <Button onClick={() => setShowLogin(true)} className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full bg-primary">
            <Lock className="w-4 h-4 mr-2" />
            Acesso Restrito
          </Button> : <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <Label htmlFor="username" className="text-slate-700">Usuário</Label>
              <Input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Digite seu usuário" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="password" className="text-slate-700">Senha</Label>
              <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha" className="mt-1" />
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => setShowLogin(false)} className="flex-1">
                Cancelar
              </Button>
              <Button type="submit" className="flex-1 bg-amber-500 hover:bg-amber-600 text-white">
                Entrar
              </Button>
            </div>
          </form>}
      </div>

      {/* Footer */}
      <p className="mt-8 text-slate-500 text-sm">
        © 2024 Trilhos Corretora de Seguros. Todos os direitos reservados.
      </p>
    </div>;
};
export default UnderConstruction;