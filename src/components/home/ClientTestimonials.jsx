import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

import ramaImg from "../../assets/review-images/rama.png";
import melodyImg from "../../assets/review-images/MELODY.jpg";
import sangamImg from "../../assets/review-images/SANGAM & SARATH.jpg";
import lelamahalImg from "../../assets/review-images/LELAMAHAL.avif";
import ariffImg from "../../assets/review-images/ARIFF NURSING HOME.jpg";
import premaImg from "../../assets/review-images/premahospatel.avif";
import royalImg from "../../assets/review-images/royal.jpg";
import mahathiImg from "../../assets/review-images/MAHATHI SOFTWARE SOLUTIONS PVT LTD.jpg";
import yellamanchiliImg from "../../assets/review-images/yellamanchili.jpg";
import aganamImg from "../../assets/review-images/AGANAM.avif";
import kranthiImg from "../../assets/review-images/KRANTHI.avif";
import aadharImg from "../../assets/review-images/addhar.jpg";

const clients = [
  {
    name: "RAMATALKIES",
    type: "THEATER",
    review: "Excellent service quality and professional team. Highly recommended for theater maintenance.",
    rating: 5,
    image: ramaImg,
  },
  {
    name: "MELODY",
    type: "THEATER",
    review: "Pearl Services has transformed our facility maintenance. Prompt and efficient support.",
    rating: 5,
    image: melodyImg,
  },
  {
    name: "SANGAM & SARATH",
    type: "THEATER",
    review: "Reliable security and cleaning services. They understand the specific needs of cinema halls.",
    rating: 4,
    image: sangamImg,
  },
  {
    name: "LELAMAHAL",
    type: "THEATER",
    review: "Great attention to detail. Our patrons have noticed the improved cleanliness.",
    rating: 5,
    image: lelamahalImg,
  },
  {
    name: "KRANTHI",
    type: "THEATER",
    review: "Consistent quality service over the years. Best cleaning team in Vizag.",
    rating: 5,
    image: kranthiImg,
  },
  {
    name: "ARIFF NURSING HOME",
    type: "HOSPITAL",
    review: "Hygiene is critical for us, and Pearl Services delivers impeccable cleaning standards.",
    rating: 5,
    image: ariffImg,
  },
  {
    name: "PREMA HOSPITAL",
    type: "HOSPITAL",
    review: "Reviewing their security protocols, we feel much safer. Professional staff and management.",
    rating: 5,
    image: premaImg,
  },
  {
    name: "ROYAL PALACE",
    type: "COMMERCIAL",
    review: "Top-notch facility management. They handle everything smoothly so we can focus on our guests.",
    rating: 5,
    image: royalImg,
  },
  {
    name: "MAHATHI SOFTWARE SOLUTIONS",
    type: "PVT LTD",
    review: "Professional corporate services. The office environment is always clean and welcoming.",
    rating: 5,
    image: mahathiImg,
  },
  {
    name: "K.P.T.L YELLAMANCHILI",
    type: "INDUSTRIAL",
    review: "Strong manpower support and excellent site safety compliance. A trusted partner.",
    rating: 4,
    image: yellamanchiliImg,
  },
  {
    name: "K.P.T.L AGANAM PUDI",
    type: "SITE",
    review: "Efficient handling of site maintenance challenges. Very responsive team.",
    rating: 5,
    image: aganamImg,
  },
  {
    name: "AADHAR CENTRE",
    type: "OFFICE",
    review: "Organized and disciplined staff. They maintain the office dignity and cleanliness perfectly.",
    rating: 5,
    image: aadharImg,
  },
];

const TestimonialCard = ({ client }) => {
  return (
    <div className="h-full bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center relative overflow-hidden group">
      {/* Decorative gradient blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
      
      {/* Decorative quote */}
      <div className="absolute top-4 right-6 text-8xl text-primary/20 font-serif leading-none select-none">
        &rdquo;
      </div>
      
      <div className="mb-6 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl relative z-10 overflow-hidden">
        {client.image ? (
          <img 
            src={client.image} 
            alt={client.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          client.name.charAt(0)
        )}
      </div>

      <div className="flex gap-1 mb-4 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < client.rating ? "text-yellow-400 fill-yellow-400" : "text-muted/30"
            }`}
          />
        ))}
      </div>

      <p className="text-muted-foreground mb-6 italic relative z-10 font-medium">
        "{client.review}"
      </p>

      <div className="mt-auto relative z-10">
        <h4 className="font-bold text-foreground text-lg">{client.name}</h4>
        <span className="text-xs font-semibold tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 inline-block">
          {client.type}
        </span>
      </div>
    </div>
  );
};

export default function ClientTestimonials() {
    // Autoplay defaults to scrolling to 'next' (right-to-left visual flow).
    const [emblaRef, emblaApi] = useEmblaCarousel(
      { loop: true, align: "center", skipSnaps: false, dragFree: false },
      [Autoplay({ delay: 3000, stopOnInteraction: false, playOnInit: true })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

      return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom mb-12 text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Clients
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Organizations</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We are proud to serve these prestigious clients across Vizag with our top-tier security and facility services.
        </p>
      </div>

      <div className="embla relative w-full" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y py-10 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`embla__slide flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_30%] min-w-0 px-4 transition-all duration-500 ease-in-out ${
                index === selectedIndex 
                  ? "scale-110 opacity-100 z-10 blur-0 grayscale-0" 
                  : "scale-90 opacity-50 blur-[1px] grayscale-[0.5]"
              }`}
            >
             <TestimonialCard client={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
