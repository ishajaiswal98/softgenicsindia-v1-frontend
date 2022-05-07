import React from 'react'

import FloatingWhatsApp from 'react-floating-whatsapp'

const FloatingWhatsapp = () => {
  return (
    <div>
    <FloatingWhatsApp
        phoneNumber="+919380359418"
        accountName="Dental-Clinic"
        allowClickAway
        notification
        notificationDelay={60000} // 1 minute
      />
  
    </div>
  )
}

export default FloatingWhatsapp