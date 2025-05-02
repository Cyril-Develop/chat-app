import { useLocation } from "react-router-dom";

interface ImageProviderProps {
  logo: { href: string; img: string, alt: string }[];
}

const ImageProvider = ({ logo }: ImageProviderProps) => {
  const { pathname } = useLocation();
  return (
    <>
      {logo.map(
        (item) =>
          pathname === item.href && (
            <img key={item.href} src={item.img} alt={item.alt} />
          )
      )}
    </>
  );
};

export default ImageProvider;
