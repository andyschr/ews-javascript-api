class GetClientExtensionRequest extends SimpleServiceRequestBase {
    private requestedExtensionIds: StringList;
    private shouldReturnEnabledOnly: boolean;
    private isUserScope: boolean;
    private userId: string;
    private userEnabledExtensionIds: StringList;
    private userDisabledExtensionIds: StringList;
    private isDebug: boolean;
    Execute(): GetClientExtensionResponse { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = GetClientExtensionRequest;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
