// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'A house in Pune offers spacious living with a touch of tranquility amidst the bustling city life. With its own private outdoor space, it provides a perfect blend of urban convenience and suburban charm, ideal for families seeking a peaceful retreat within the vibrant city',
    image: House1,
    imageLg: House1Lg,
    country: 'pune',
    address: 'Hermes Heritage Phase 2, Shastrinagar, Yerawada, Pune, Maharashtra 411006',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '110000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      "A house in chembur Mumbai offers a serene escape from the city's hustle and bustle while still maintaining proximity to its amenities. Surrounded by lush greenery and scenic landscapes, it provides a tranquil oasis for those seeking a peaceful suburban lifestyle with easy access to the dynamic energy of Mumbai.",
    image: House2,
    imageLg: House2Lg,
    country: 'mumbai',
    address: 'Shop No 01, chembur fatak, Chembur, Mumbai, Maharashtra 400089',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      " A centrally located house in Pune offers unparalleled convenience with easy access to the city's vibrant cultural scene, bustling markets, and renowned educational institutions. Nestled amidst the heartbeat of Pune, it provides a perfect balance of urban excitement and residential tranquility, ideal for individuals looking to immerse themselves in the city's dynamic lifestyle.",
    image: House3,
    imageLg: House3Lg,
    country: 'pune',
    address: 'Boat Club Rd, Bund Garden, Sangamvadi, Pune, Maharashtra 411001',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      "A house in Mumbai's western suburbs epitomizes luxury living with its upscale neighborhoods, modern amenities, and proximity to entertainment hubs and commercial districts. Surrounded by an eclectic mix of dining, shopping, and recreational options, it offers an exclusive lifestyle experience amidst the glamour and sophistication of Mumbai's affluent western region.",
    image: House4,
    imageLg: House4Lg,
    country: 'mumbai',
    address: "N S Rd Number 13, JVPD Scheme, Juhu, Mumbai, Maharashtra 400049",
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      "A house in Wagholi, Pune, presents a harmonious blend of suburban charm and urban convenience. Nestled amidst serene surroundings, it offers a peaceful retreat from the city's hustle and bustle while providing easy access to essential amenities and transportation networks. Ideal for families and professionals alike, Wagholi combines a tranquil lifestyle with modern comforts for a truly fulfilling living experience.",
    image: House5,
    imageLg: House5Lg,
    country: 'pune',
    address: "Domkhel Rd, near Raisoni Engineering college, Wagholi, Pune, Maharashtra 412207",
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      "Bandra West, Mumbai, epitomizes cosmopolitan living with its trendy cafes, vibrant nightlife, and upscale boutiques. This sought-after neighborhood seamlessly blends heritage charm with contemporary flair, offering residents a dynamic lifestyle amid iconic landmarks and picturesque sea views. Ideal for those seeking a vibrant urban experience, Bandra West is the epitome of Mumbai's chic and glamorous scene.",
    image: House6,
    imageLg: House6Lg,
    country: 'mumbai',
    address: 'Swami Vivekananda Rd, Santosh Nagar, Bandra West, Mumbai, Maharashtra 400050',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      "An apartment in Mumbai offers a dynamic urban lifestyle amidst the city's energetic ambiance and diverse culture. With convenient access to transportation, shopping centers, and entertainment hubs, it provides residents with modern amenities and a sense of community in the bustling metropolis. Ideal for individuals seeking convenience and connectivity, a Mumbai apartment embodies the essence of contemporary city livingLorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'mumbai',
    address: 'Kolivery Village, MMRDA Area, Kalina, Santacruz East, Mumbai, Maharashtra 400098',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      " An apartment in Pune offers a perfect blend of modern living and cultural richness in the heart of Maharashtra. With its vibrant neighborhoods, proximity to educational and employment hubs, and a plethora of recreational amenities, it provides residents with a comfortable and convenient lifestyle. Ideal for professionals, students, and families alike, a Pune apartment offers the perfect balance of urban excitement and residential tranquility.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'pune',
    address: '2016, Lokmanya Bal Gangadhar Tilak Rd, Madiwale Colony, Sadashiv Peth, Pune, Maharashtra 411030',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      "An apartment in Swargate, Pune, offers a convenient urban lifestyle with easy access to transportation, markets, and cultural attractions. Nestled in the heart of the city, it provides residents with a bustling yet comfortable living experience, surrounded by a vibrant mix of amenities and entertainment options.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'pune',
    address: '418, Ghorpade Peth Road, near Swargate pmd depo, Rohan nivas, opp to vega center, Pune, Maharashtra 411042',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      "A house in Kharadi, Pune, offers a harmonious blend of modern living and suburban tranquility. Situated in one of Pune's rapidly developing areas, it provides residents with proximity to IT parks, commercial centers, and recreational facilities. With its serene surroundings and excellent connectivity, a Kharadi house offers an ideal living environment for families and professionals seeking convenience and comfort in Pune's thriving landscape.",
    image: House7,
    imageLg: House7Lg,
    country: 'pune',
    address: 'Ashoka Nagar, Kharadi, Pune, Maharashtra 411014',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      "A house in Goregaon, Mumbai, presents a vibrant suburban lifestyle amidst the city's dynamic energy. Located in one of Mumbai's bustling neighborhoods, it offers residents a perfect balance of urban convenience and residential tranquility. With its proximity to commercial hubs, entertainment centers, and recreational facilities, a Goregaon house provides an ideal living space for families and professionals seeking both convenience and comfort in Mumbai's bustling landscape.",
    image: House8,
    imageLg: House8Lg,
    country: 'mumbai',
    address: 'Jawahar Nagar, Goregaon West, Mumbai, Maharashtra 400104',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      "A house in Shivaji Nagar, Pune, offers a blend of historic charm and urban vibrancy. Nestled in the heart of the city, it provides residents with easy access to cultural landmarks, educational institutions, and commercial centers. With its tree-lined streets and bustling markets, a Shivaji Nagar house offers an ideal living space for those seeking a lively yet connected lifestyle in Pune's historic district.",
    image: House9,
    imageLg: House9Lg,
    country: 'pune',
    address: 'GRHX+Q9X, Eastern Bungalow Rd, Revenue Colony, Pune, Maharashtra 411005',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
     "A house in Colaba, Mumbai, offers an unparalleled blend of historical charm and modern sophistication. Situated in South Mumbai, it boasts picturesque views of the Arabian Sea and iconic landmarks such as the Gateway of India. With its vibrant cultural scene, upscale boutiques, and gourmet dining options, a Colaba house presents an exclusive lifestyle experience in the heart of India's financial capital.",
    image: House10,
    imageLg: House10Lg,
    country: 'mumbai',
    address: 'B Block, Navy Nagar, Colaba, Mumbai, Maharashtra 400005',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      "A house in Kothrud, Pune, offers a serene suburban lifestyle with excellent connectivity to the city's amenities. Located in one of Pune's largest residential areas, it provides residents with a peaceful environment amidst lush greenery and wide roads. With proximity to schools, hospitals, and shopping centers, a Kothrud house offers an ideal living space for families seeking comfort and convenience in Pune's vibrant landscape.",
    image: House11,
    imageLg: House11Lg,
    country: 'pune',
    address: '7, Paud Rd, Pratik Nagar, Gujrat Colony, Kothrud, Pune, Maharashtra 411058',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      "A house in Andheri, Mumbai, embodies the essence of modern urban living with its bustling commercial centers, vibrant entertainment hubs, and excellent connectivity. Situated in one of Mumbai's prime locations, it offers residents a dynamic lifestyle enriched with cultural diversity and convenience. With its proximity to business districts, shopping malls, and transportation networks, an Andheri house provides an ideal living space for individuals and families seeking the pulse of Mumbai's cosmopolitan charm.",
    image: House12,
    imageLg: House12Lg,
    country: 'mumbai',
    address: 'Andheri - Kurla Rd, Marol, Andheri East, Mumbai, Maharashtra 400059',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      "Kharghar, Mumbai, is a rapidly developing node in Navi Mumbai known for its modern infrastructure and serene environment. An apartment in Kharghar offers residents a harmonious blend of urban convenience and natural beauty. With its lush green surroundings, well-planned infrastructure, and proximity to educational institutions and commercial hubs, a Kharghar apartment provides an ideal living space for families and professionals seeking a balanced lifestyle in Mumbai's expanding landscape.",
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'mumbai',
    address: 'Raghunath Rd, Kesar Symphony, Sector 20, Kharghar, Navi Mumbai, Maharashtra 410210',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      " An apartment in Yerwada, Pune, offers a unique blend of urban convenience and historical charm. Situated in close proximity to Pune's bustling city center, it provides residents with easy access to employment hubs, educational institutions, and recreational facilities. With its rich cultural heritage and modern amenities, a Yerwada apartment offers an ideal living space for individuals and families seeking a vibrant lifestyle in Pune's thriving landscape.",
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'pune',
    address: 'Loop Rd, Shastrinagar, Yerawada, Pune, Maharashtra 411006',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      "An apartment in Dadar, Mumbai, offers a perfect mix of traditional charm and modern convenience. Located in the heart of Mumbai, Dadar is known for its bustling markets, cultural landmarks, and excellent connectivity. With its vibrant street life, proximity to schools, hospitals, and commercial centers, a Dadar apartment provides an ideal living space for families and professionals seeking a dynamic urban lifestyle with a touch of nostalgia.",
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'mumbai',
    address: 'Swatantryaveer Savarkar Rd, Chandrakant Dhuru Wadi, Dadar, Mumbai, Maharashtra 400028',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
];
