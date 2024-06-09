import { useLocation } from "react-router-dom";

interface ImageProviderProps {
  logo: { href: string; img: string }[];
}

const ImageProvider = ({ logo }: ImageProviderProps) => {
  const { pathname } = useLocation();
  return (
    <>
      {logo.map(
        (item) =>
          pathname === item.href && (
            <img key={item.href} src={item.img} alt="logo" />
          )
      )}
    </>
  );
};

export default ImageProvider;
