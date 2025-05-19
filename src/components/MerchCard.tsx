
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

interface MerchCardProps {
  id?: string;
  name: string;
  price: string;
  image: string;
}

const MerchCard = ({ id = "", name, price, image }: MerchCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Конвертируем строку цены в число (удаляем символы валюты и пробелы)
    const numericPrice = parseFloat(price.replace(/[^\d.-]/g, ""));
    
    addToCart({
      id: id || `${name}-${Date.now()}`,
      name,
      price: numericPrice,
      image
    });
  };

  return (
    <div className="bg-esports-darkGray rounded-md overflow-hidden hover:shadow-lg hover:shadow-esports-red/20 transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white font-bold mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-esports-red font-bold">{price}</p>
          <Button 
            size="sm" 
            className="bg-esports-red hover:bg-esports-darkRed text-white"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MerchCard;
