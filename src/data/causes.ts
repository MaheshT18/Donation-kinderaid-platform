
export interface Cause {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  goalAmount: number;
  raisedAmount: number;
  category: string;
  featured: boolean;
}

export const causes: Cause[] = [
  {
    id: "1",
    title: "Clean Water Initiative",
    shortDescription: "Providing clean water to communities in need",
    description: "Access to clean water is a fundamental human right, yet millions around the world still lack this basic necessity. Our Clean Water Initiative aims to build sustainable water systems in communities facing water scarcity. Each donation helps fund well construction, water purification systems, and education on water conservation and hygiene practices. Together, we can reduce waterborne diseases and improve quality of life for thousands of families.",
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/046/849/297/small_2x/close-up-hands-of-person-holding-pure-clean-water-from-nature-stream-or-river-photo.jpeg",
    goalAmount: 50000,
    raisedAmount: 23750,
    category: "Environment",
    featured: true
  },
  {
    id: "2",
    title: "Education for All",
    shortDescription: "Supporting education in underserved communities",
    description: "Education is the most powerful tool we can use to change the world. Our Education for All program focuses on providing quality education to children in underserved communities. Donations support school construction, educational materials, teacher training, and scholarship programs. By investing in education, we're not just helping individual children—we're building stronger communities and brighter futures for generations to come.",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80",
    goalAmount: 75000,
    raisedAmount: 42000,
    category: "Education",
    featured: true
  },
  {
    id: "3",
    title: "Wildlife Conservation",
    shortDescription: "Protecting endangered species and their habitats",
    description: "Our planet's wildlife faces unprecedented threats from habitat loss, climate change, and human activity. The Wildlife Conservation project works to protect endangered species through habitat preservation, anti-poaching efforts, and community education programs. Your support helps fund wildlife sanctuaries, research initiatives, and conservation technology. By protecting biodiversity, we safeguard not only magnificent creatures but also the delicate ecosystems that sustain all life on Earth.",
    imageUrl: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    goalAmount: 60000,
    raisedAmount: 18000,
    category: "Environment",
    featured: true
  },
  {
    id: "4",
    title: "Hunger Relief Program",
    shortDescription: "Providing meals to those facing food insecurity",
    description: "Hunger affects millions of people worldwide, from urban neighborhoods to rural communities. Our Hunger Relief Program addresses immediate food needs while also tackling the root causes of hunger and malnutrition. Your donations support food banks, community gardens, meal programs, and agricultural training initiatives. Together, we can ensure that everyone has access to nutritious food and the resources they need to build food security for the future.",
    imageUrl: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    goalAmount: 40000,
    raisedAmount: 27500,
    category: "Food",
    featured: false
  },
  {
    id: "5",
    title: "Healthcare Access",
    shortDescription: "Bringing medical care to underserved regions",
    description: "Quality healthcare should be accessible to everyone, regardless of location or economic status. Our Healthcare Access initiative works to bridge healthcare gaps by supporting mobile clinics, medical equipment donations, preventive care programs, and healthcare worker training in underserved areas. Each contribution helps provide vital medical services, medications, and health education to communities with limited healthcare infrastructure.",
    imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    goalAmount: 80000,
    raisedAmount: 35000,
    category: "Health",
    featured: false
  },
  {
    id: "6",
    title: "Disaster Relief Fund",
    shortDescription: "Providing emergency aid during natural disasters",
    description: "When disasters strike, immediate and effective response can save lives and help communities begin the path to recovery. Our Disaster Relief Fund provides emergency shelter, food, water, medical care, and essential supplies to those affected by natural disasters. We also support long-term rebuilding efforts and disaster preparedness initiatives. Your donation ensures we can respond quickly when every minute counts.",
    imageUrl: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    goalAmount: 100000,
    raisedAmount: 72000,
    category: "Emergency",
    featured: false
  }
];

export const getCauseById = (id: string): Cause | undefined => {
  return causes.find(cause => cause.id === id);
};

export const getFeaturedCauses = (): Cause[] => {
  return causes.filter(cause => cause.featured);
};

export const getAllCauses = (): Cause[] => {
  return causes;
};
