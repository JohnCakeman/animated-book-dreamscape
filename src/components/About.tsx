
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, TrendingUp, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Target className="w-12 h-12 text-yellow-500" />,
      title: "Четкие цели",
      description: "Научитесь ставить правильные цели и достигать их"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-yellow-500" />,
      title: "Рост прибыли",
      description: "Проверенные методы увеличения доходов на 300%"
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-500" />,
      title: "Команда мечты",
      description: "Как собрать и мотивировать идеальную команду"
    }
  ];

  const benefits = [
    "Пошаговые инструкции для запуска бизнеса",
    "Секреты успешного маркетинга и продаж",
    "Управление финансами и инвестиции",
    "Психология успеха и мотивация",
    "Реальные кейсы успешных предпринимателей",
    "Шаблоны и чек-листы для работы"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            О книге "Секреты Успеха в Бизнесе"
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Эта книга — результат 15 лет опыта в бизнесе и анализа сотен успешных компаний. 
            Здесь собраны только работающие стратегии и проверенные методы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <img 
              src="/placeholder.svg" 
              alt="Книга Секреты Успеха в Бизнесе" 
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl hover-scale"
            />
          </div>
          
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Что вы получите:
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover-scale">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
