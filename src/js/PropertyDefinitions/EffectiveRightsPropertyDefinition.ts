    class EffectiveRightsPropertyDefinition extends PropertyDefinition {
        Type: System.Type;
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }


    export EffectiveRightsPropertyDefinition;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
