
import { useState } from "react";
import { Check, Zap, Target, Users, ArrowRight, Brain, BarChart3, TrendingUp, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e e-mail.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Interesse registrado com sucesso!",
      description: "Entraremos em contato em breve com o acesso antecipado.",
    });
    
    // Here you would typically send the data to your backend
    console.log("Lead captured:", { name, email, company });
    
    // Reset form
    setName("");
    setEmail("");
    setCompany("");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">InsightCopilot</span>
            </div>
            <Button 
              onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Quero testar o Agente de IA
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme seus dados em 
              <span className="text-blue-600"> insights inteligentes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              O primeiro Agente de IA que se conecta diretamente aos seus dashboards, 
              analisa seus dados e responde perguntas complexas em linguagem natural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Quero testar o Agente de IA
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver como funciona
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cansado de perder tempo analisando dados?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sabemos como é frustrante ter dashboards cheios de dados, mas ainda assim 
              precisar de horas para encontrar insights relevantes. Você fica preso em planilhas, 
              filtros complexos e relatórios que ninguém consegue interpretar rapidamente.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-2 border-red-100 bg-red-50">
                <CardContent className="p-6 text-center">
                  <div className="text-red-500 font-semibold mb-2">Tempo perdido</div>
                  <p className="text-gray-600">Horas navegando entre dashboards sem encontrar respostas claras</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-red-100 bg-red-50">
                <CardContent className="p-6 text-center">
                  <div className="text-red-500 font-semibold mb-2">Decisões lentas</div>
                  <p className="text-gray-600">Insights importantes ficam escondidos nos dados</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-red-100 bg-red-50">
                <CardContent className="p-6 text-center">
                  <div className="text-red-500 font-semibold mb-2">Complexidade técnica</div>
                  <p className="text-gray-600">Ferramentas que exigem conhecimento avançado para usar</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A solução que você estava esperando
              </h2>
              <p className="text-lg text-gray-600">
                O Monitora conecta diretamente aos seus dashboards e funciona como um analista de dados pessoal
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Respostas instantâneas</h3>
                    <p className="text-gray-600">Faça perguntas em português e receba insights imediatos dos seus dados</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Conexão direta</h3>
                    <p className="text-gray-600">Integração nativa com Power BI, Tableau, Looker e Metabase</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">IA avançada</h3>
                    <p className="text-gray-600">Algoritmos que entendem contexto e identificam padrões complexos</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Insights preditivos</h3>
                    <p className="text-gray-600">Identifica tendências e sugere ações antes dos problemas acontecerem</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Para toda equipe</h3>
                    <p className="text-gray-600">Interface simples que qualquer pessoa pode usar, sem treinamento técnico</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Gauge className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Setup em minutos</h3>
                    <p className="text-gray-600">Configuração rápida e sem complicações técnicas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Como funciona em 4 passos simples
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Conecte",
                  description: "Conecte o Monitora aos seus dashboards existentes",
                  icon: <BarChart3 className="h-8 w-8 text-blue-600" />
                },
                {
                  step: "2", 
                  title: "Configure",
                  description: "Configure suas métricas e objetivos de negócio",
                  icon: <Target className="h-8 w-8 text-blue-600" />
                },
                {
                  step: "3",
                  title: "Pergunte",
                  description: "Faça perguntas em linguagem natural sobre seus dados",
                  icon: <Brain className="h-8 w-8 text-blue-600" />
                },
                {
                  step: "4",
                  title: "Aja",
                  description: "Receba insights acionáveis e tome decisões mais rápidas",
                  icon: <Zap className="h-8 w-8 text-blue-600" />
                }
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Para quem é o Monitora?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Gestores e Diretores",
                  description: "Que precisam de insights rápidos para tomar decisões estratégicas",
                  items: ["CEOs", "Diretores", "Gerentes"]
                },
                {
                  title: "Analistas de Dados",
                  description: "Que querem automatizar análises repetitivas e focar em insights de alto valor",
                  items: ["Data Analysts", "BI Analysts", "Data Scientists"]
                },
                {
                  title: "Equipes de Produto",
                  description: "Que precisam entender métricas de produto e comportamento do usuário",
                  items: ["Product Managers", "Growth", "Marketing"]
                }
              ].map((audience, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
                    <p className="text-gray-600 mb-4">{audience.description}</p>
                    <div className="space-y-2">
                      {audience.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Dashboards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Compatível com suas ferramentas favoritas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[
                { name: "Power BI", color: "text-yellow-600" },
                { name: "Tableau", color: "text-blue-600" },
                { name: "Looker Studio", color: "text-green-600" },
                { name: "Metabase", color: "text-purple-600" }
              ].map((tool, index) => (
                <div key={index} className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className={`text-2xl font-bold ${tool.color} mb-2`}>
                    {tool.name}
                  </div>
                  <div className="text-sm text-gray-500">Em breve</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              O que nossos usuários estão dizendo
            </h2>
            <div className="bg-white p-8 rounded-lg border-2 border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">
                Depoimentos em breve...
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Seja um dos primeiros a testar e compartilhar sua experiência
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="cta-form" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para transformar seus dados?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Cadastre-se para receber acesso antecipado e seja um dos primeiros a usar o InsightCopilot
            </p>
            
            <Card className="bg-white p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Seu nome *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="text-lg p-4"
                  />
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-lg p-4"
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Nome da empresa (opcional)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="text-lg p-4"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-4"
                >
                  Quero testar o Agente de IA
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                * Campos obrigatórios. Não enviamos spam.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">InsightCopilot</span>
              </div>
              <p className="text-gray-400">
                Transformando dados em insights inteligentes com IA avançada.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Como funciona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Quem somos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 InsightCopilot. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
