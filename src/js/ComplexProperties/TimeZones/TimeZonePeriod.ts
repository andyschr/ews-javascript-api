
class TimeZonePeriod extends ComplexProperty {
    static StandardPeriodId: string = "Std";
    static StandardPeriodName: string = "Standard";
    static DaylightPeriodId: string = "Dlt";
    static DaylightPeriodName: string = "Daylight";
    IsStandardPeriod: boolean;
    Bias: any /*System.TimeSpan*/;
    Name: string;
    Id: string;
    private bias: any /*System.TimeSpan*/;
    private name: string;
    private id: string;
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
