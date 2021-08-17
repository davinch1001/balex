import React from 'react';

const Address = () => {
    return (
     <div className='address'>
         <div className="address__user-address">
      <div className="address__standard">Standard(DE)</div>
         <div className="address__user-names">
             <div className="user-first-name">
                 <span className='text'>First name</span>
                 <span>Даулет</span>
             </div>
             <div className="user-last-name">
                 <span className='text'>Last name</span>
                 <span>Мантаев</span>
             </div>
         </div>
             <div className="address__user-address-data">
                 <div className="user-street">
                     <span className="text street">Street Addres</span>
                     <span className=" street">23 Industrial Blvd</span>
                 </div>
                 <div className="user-street">
                     <span className="text address">Address 2 (Apt, Unit, Suite)</span>
                     <span className=" street">SHI 917342</span>
                 </div>
             </div>
             <div className="address__city-state">
                 <div className="user-city">
                     <span className="text city">City</span>
                     <span className=" city-name">NewCastle</span>
                 </div>
                 <div className="user-state">
                     <span className="text state">State</span>
                     <span className=" state-name">Deleware</span>
                 </div>
             </div>
         </div>
     </div>
    );
};

export default Address;