
class AbsoluteDateTransition extends TimeZoneTransition {
    DateTime: Date;
    private dateTime: Date;
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    InitializeFromTransitionTime(transitionTime: any): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
