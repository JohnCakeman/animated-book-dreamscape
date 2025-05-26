
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Алексей Петров",
      position: "CEO, TechStart",
      text: "Благодаря этой книге я смог увеличить прибыль своей компании на 250% за год. Рекомендую всем предпринимателям!",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "Мария Иванова",
      position: "Основатель Beauty Studio",
      text: "Невероятно практичная книга! Каждая глава дает конкретные инструменты для роста бизнеса. Уже применяю советы.",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "Дмитрий Сидоров",
      position: "Директор по развитию",
      text: "Лучшая инвестиция в свое образование! Книга помогла мне по-новому взглянуть на управление командой.",
      rating: 5,
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
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
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Отзывы читателей
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Более 10,000 предпринимателей уже изменили свою жизнь с помощью этой книги
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover-scale bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-yellow-400 mr-2" />
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-200 mb-6 italic">"{review.text}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-white">{review.name}</div>
                    <div className="text-sm text-gray-300">{review.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
