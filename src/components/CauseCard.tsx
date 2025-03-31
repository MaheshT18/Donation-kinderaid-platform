
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProgressBar from './ProgressBar';
import { Cause } from '@/data/causes';

interface CauseCardProps {
  cause: Cause;
}

const CauseCard: React.FC<CauseCardProps> = ({ cause }) => {
  const { id, title, shortDescription, imageUrl, goalAmount, raisedAmount, category } = cause;
  
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-teal-400 text-white text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <CardContent className="flex-grow pt-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{shortDescription}</p>
        <ProgressBar current={raisedAmount} goal={goalAmount} />
      </CardContent>
      
      <CardFooter className="border-t pt-4 flex gap-2">
        <Button variant="outline" className="flex-1" asChild>
          <Link to={`/cause/${id}`}>Learn More</Link>
        </Button>
        <Button className="flex-1 bg-teal-400 hover:bg-teal-500" asChild>
          <Link to={`/donate/${id}`}>Donate</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CauseCard;
