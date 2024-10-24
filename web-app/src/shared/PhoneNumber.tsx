import React from "react";

type Props = {
  phoneNumber: string; // The phone number to dial
  children: React.ReactNode; // Text for the link
  className?: string; // Optional class for additional styling
  color?: string; // Optional color prop
};

const PhoneNumber = ({ phoneNumber, children, className, color = "text-blue-500" }: Props) => {
  const telLink = `tel:${phoneNumber}`; // Construct the tel link

  return (
    <a href={telLink} className={`${color} ${className}`}>
      {children}
    </a>
  );
};

export default PhoneNumber;