import { motion } from "framer-motion";

const LogoCarousel = () => {
  const logos = [
    "/lovable-uploads/e24a83fc-ae12-456e-afbb-6022b03e17ad.png", // Facebook
    "/lovable-uploads/425b1121-3a71-4917-afbc-c2e43af4598d.png", // Instagram
    "/lovable-uploads/c8ca09c2-1578-462f-bd6a-ef80fa0c77ee.png", // Meta
    "/lovable-uploads/bac5897d-8ccd-429c-8b1f-cf26e008f8c9.png", // Podcast
    "/lovable-uploads/864a04e0-bff5-4fa0-8028-36ede5314613.png", // Spotify
    "/lovable-uploads/f8e5ee7c-4046-4f4f-9ebd-2e33524a5895.png", // TikTok
    "/lovable-uploads/e2ce3b34-e162-4ac9-bff2-f5da5f00a834.png", // YouTube
  ];

  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-background/50 backdrop-blur-sm py-12 mt-20">
      <motion.div 
        className="flex space-x-16"
        initial={{ opacity: 0, x: "0%" }}
        animate={{
          opacity: 1,
          x: "-50%"
        }}
        transition={{
          opacity: { duration: 0.5 },
          x: {
            duration: 15, // Reduced from 25 to 15 seconds
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }
        }}
        style={{
          width: "fit-content",
          display: "flex",
          gap: "4rem"
        }}
      >
        {extendedLogos.map((logo, index) => (
          <motion.img
            key={`logo-${index}`}
            src={logo}
            alt={`Partner logo ${index + 1}`}
            className="h-8 object-contain"
            initial={{ opacity: 0.5 }}
            whileHover={{ 
              opacity: 1,
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;