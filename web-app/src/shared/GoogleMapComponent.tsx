// GoogleMapComponent.tsx

const GoogleMapComponent: React.FC = () => {
  return (
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1736.19624982754!2d103.74998767821164!3d1.3370484538365914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1012b1cd8411%3A0xb605572726f7f6ae!2sTomy%20Hui%20Electrical%20Engineering%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1729617239513!5m2!1sen!2ssg" 
            width="800" 
            height="600" 
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy" 
            className="rounded shadow-lg" 
    ></iframe>
  );
};

export default GoogleMapComponent;