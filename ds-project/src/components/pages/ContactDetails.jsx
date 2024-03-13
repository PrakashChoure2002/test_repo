import React from 'react';

const ContactDetails = () => {
  const contactDetails = [
    { label: 'Contact', value: '123 Main St, City, Country' },
    { label: 'Email', value: 'contact@example.com' },
    { label: 'Fax', value: '+123456789' },
    { label: 'Support', value: 'support@example.com' }
  ];

  return (
    <div className="flex flex-wrap justify-center p-4">
      <div className="w-full md:w-1/2 px-4">
        <div className="bg-gray-200 h-80 w-full rounded-lg overflow-hidden">
          {/* Replace the iframe src with your map embed code */}
          <iframe
            title="Location Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.9278647362986!2d106.66704151476967!3d10.775843992305923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fb6508d90d7%3A0xe2b6f45fa13a1119!2zNTAwIEjGsMahbmcgVmnhu4d0LCBCw6xuaCBQaMO6LCBHaWFuZyBUcuG6oWksIFTDom4sIFZp4buHdCBOYW0!5e0!3m2!1sen!2s!4v1647620589240!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4 p-4">
        <div className="bg-gray-200 h-64 w-full rounded-lg overflow-hidden ">
          <div className="p-4 ">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="mb-4 text-black">
                <p className="font-semibold text-black">{detail.label}:</p>
                <p className='text-black'>{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
