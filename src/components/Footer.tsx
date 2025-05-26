
import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
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
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-8 h-8 text-yellow-400" />
                <span className="text-xl font-bold">Секреты Успеха</span>
              </div>
              <p className="text-gray-200">
                Ваш путеводитель к финансовому успеху и процветающему бизнесу
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-gray-200">
                <li><a href="#about" className="hover:text-white transition-colors">О книге</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#cta" className="hover:text-white transition-colors">Купить</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-200">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Конфиденциальность</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-200">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@sekrety-uspekha.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-400 mt-8 pt-8 text-center text-gray-200">
            <p>&copy; 2024 Секреты Успеха в Бизнесе. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
