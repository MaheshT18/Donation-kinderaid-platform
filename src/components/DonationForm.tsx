
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { Cause } from '@/data/causes';

interface DonationFormProps {
  cause?: Cause;
}

const DonationForm: React.FC<DonationFormProps> = ({ cause }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<string>('50');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Process donation (in a real app, this would connect to a payment gateway)
    setTimeout(() => {
      setLoading(false);
      toast.success('Thank you for your donation!');
      navigate('/thank-you', { 
        state: { 
          amount: amount === 'custom' ? customAmount : amount,
          cause: cause?.title 
        } 
      });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Make a Donation</CardTitle>
        <CardDescription>
          {cause 
            ? `Support ${cause.title} with your contribution` 
            : 'Your generosity creates positive change in the world'
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="amount">Donation Amount</Label>
            <RadioGroup 
              id="amount" 
              value={amount} 
              onValueChange={setAmount}
              className="grid grid-cols-3 gap-3"
            >
              <Label 
                htmlFor="option-25"
                className={`flex items-center justify-center py-3 border rounded-md cursor-pointer transition-all ${
                  amount === '25' ? 'bg-teal-50 border-teal-400' : 'hover:bg-gray-50'
                }`}
              >
                <RadioGroupItem value="25" id="option-25" className="sr-only" />
                $25
              </Label>
              <Label 
                htmlFor="option-50"
                className={`flex items-center justify-center py-3 border rounded-md cursor-pointer transition-all ${
                  amount === '50' ? 'bg-teal-50 border-teal-400' : 'hover:bg-gray-50'
                }`}
              >
                <RadioGroupItem value="50" id="option-50" className="sr-only" />
                $50
              </Label>
              <Label 
                htmlFor="option-100"
                className={`flex items-center justify-center py-3 border rounded-md cursor-pointer transition-all ${
                  amount === '100' ? 'bg-teal-50 border-teal-400' : 'hover:bg-gray-50'
                }`}
              >
                <RadioGroupItem value="100" id="option-100" className="sr-only" />
                $100
              </Label>
              <Label 
                htmlFor="option-250"
                className={`flex items-center justify-center py-3 border rounded-md cursor-pointer transition-all ${
                  amount === '250' ? 'bg-teal-50 border-teal-400' : 'hover:bg-gray-50'
                }`}
              >
                <RadioGroupItem value="250" id="option-250" className="sr-only" />
                $250
              </Label>
              <Label 
                htmlFor="option-500"
                className={`flex items-center justify-center py-3 border rounded-md cursor-pointer transition-all ${
                  amount === '500' ? 'bg-teal-50 border-teal-400' : 'hover:bg-gray-50'
                }`}
              >
                <RadioGroupItem value="500" id="option-500" className="sr-only" />
                $500
              </Label>
              <Label 
                htmlFor="option-custom"
                className={`flex items-center justify-center py-3 border rounded-md cursor-pointer transition-all ${
                  amount === 'custom' ? 'bg-teal-50 border-teal-400' : 'hover:bg-gray-50'
                }`}
              >
                <RadioGroupItem value="custom" id="option-custom" className="sr-only" />
                Custom
              </Label>
            </RadioGroup>
            
            {amount === 'custom' && (
              <div className="mt-3">
                <Label htmlFor="custom-amount">Enter amount</Label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="pl-7"
                    min="1"
                    required={amount === 'custom'}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-teal-400 hover:bg-teal-500" 
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Complete Donation'}
          </Button>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            Your donation is secure and encrypted. By donating, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default DonationForm;
