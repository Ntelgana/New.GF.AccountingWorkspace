interface shipmentNumbers{
    Shipment_number_Air_SFO : string;
    Shipment_number_US_SFO : string;
    Shipment_number_Ocean: string;
    Shipment_number_Air: string;

 }
 
 const shipmentNumbers: shipmentNumbers = {
    //USING AIR SHIPMENT AS US SFO
    Shipment_number_Air_SFO: "121554412",
    Shipment_number_US_SFO: "121560837",
    Shipment_number_Ocean: "{0}",
    Shipment_number_Air: "{0}",
    
// shipment number with no branch below
    // Shipment_number_Ocean: "120766219"

}

export {shipmentNumbers}