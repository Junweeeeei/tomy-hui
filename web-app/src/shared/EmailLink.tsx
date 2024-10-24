import React from "react";

type Props = {
  children: React.ReactNode; // display string for link
  className?: string; // Optional className prop
};

const EmailLink = ({ children, className="text-blue-500" }: Props) => {
  const recipient = "tomyhui_finance@yahoo.com.sg"; // Recipient's email
  const subject = encodeURIComponent(""); // Email subject
  const body = encodeURIComponent(""); // Email body

  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

  return (
    <a href={mailtoLink} className={className}>
      {children}
    </a>
  );
};

export default EmailLink;