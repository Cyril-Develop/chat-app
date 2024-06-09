import { useLocation } from "react-router-dom";

interface ImageSettingsProps {
  logo: { href: string; img: string }[];
}

const ImageSettings = ({ logo }: ImageSettingsProps) => {
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

export default ImageSettings;
