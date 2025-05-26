
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Gift } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="relative py-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/анимация мишка.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Начните свой путь к успеху уже сегодня!
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6" />
              <span className="text-lg font-bold">Ограниченное предложение!</span>
            </div>
            <div className="text-2xl mb-2">
              <span className="line-through text-xl opacity-75">2990₽</span>
              <span className="text-4xl font-bold ml-4">1990₽</span>
            </div>
            <p className="text-sm">Скидка действует только до конца месяца</p>
          </div>

          <Card className="bg-white/15 backdrop-blur-sm mb-8 hover-scale border-white/20">
            <CardContent className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">В стоимость входит:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Электронная версия книги (PDF)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Аудиоверсия книги (8 часов)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Бонусные шаблоны и чек-листы</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Доступ к закрытому чату поддержки</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gift className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold">БОНУС: Видеокурс "Первые шаги"</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gift className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold">БОНУС: 30-дневная гарантия</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-12 py-6 hover-scale"
            >
              Купить сейчас за 1990₽
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-xl px-12 py-6 hover-scale"
            >
              Задать вопрос
            </Button>
          </div>

          <p className="text-sm mt-6 opacity-90">
            Безопасная оплата • Мгновенная доставка • Гарантия возврата
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
