
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MerchCardProps {
  name: string;
  price: string;
  image: string;
}

const MerchCard = ({ name, price, image }: MerchCardProps) => {
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
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MerchCard;
