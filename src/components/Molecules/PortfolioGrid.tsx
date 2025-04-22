const PortfolioGrid = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1470&auto=format&fit=crop",
      alt: "Model in black dress",
      caption: "EDITORIAL 2025",
      offset: "translate-y-10",
    },
    {
      src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1469&auto=format&fit=crop",
      alt: "Model in white outfit",
      caption: "SUMMER COLLECTION",
      offset: "-translate-y-12",
    },
    {
      src: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1472&auto=format&fit=crop",
      alt: "Model in urban setting",
      caption: "STREET STYLE",
      offset: "translate-y-16",
    },
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop",
      alt: "Studio portrait",
      caption: "PORTRAIT SERIES",
      offset: "-translate-y-20",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 w-full h-full px-6 py-2 box-border">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative transform ${image.offset} transition duration-500 flex flex-col items-center`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-[60vh] object-cover rounded-md transition-transform duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl"
          />
          <span className="mt-2 text-sm text-neutral-800 font-medium tracking-wide text-center">
            {image.caption}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
