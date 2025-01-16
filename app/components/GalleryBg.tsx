import Image from "next/image";

interface GalleryProps {
  imagePaths: string[];
}

const Gallery: React.FC<GalleryProps> = ({ imagePaths }) => {
  return (
    <>
      {imagePaths.map((path, index) => (
        <div key={index} className="max-w-[100px] md:max-w-[7.5rem]">
          <Image width={140} height={140} src={path} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </>
  );
};

export default Gallery;
