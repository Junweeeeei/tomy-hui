import React from "react";

type Props = {
  children: React.ReactNode; // display string for link
  color?: string; // Optional color prop
};

const EmailLink = ({ children, color = "text-blue-500" }: Props) => {
  const recipient = "tomyhui_finance@yahoo.com.sg"; // Recipient's email
  const subject = encodeURIComponent(""); // Email subject
  const body = encodeURIComponent(""); // Email body

  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

  return (
    <a href={mailtoLink} className={color}>
      {children}
    </a>
  );
};

export default EmailLink;