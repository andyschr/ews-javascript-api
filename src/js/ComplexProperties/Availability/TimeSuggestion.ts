class TimeSuggestion extends ComplexProperty {
    MeetingTime: Date;
    IsWorkTime: boolean;
    Quality: SuggestionQuality;
    Conflicts: Conflict[];// System.Collections.ObjectModel.Collection<Conflict>;
    private meetingTime: Date;
    private isWorkTime: boolean;
    private quality: SuggestionQuality;
    private conflicts: Conflict[];// System.Collections.ObjectModel.Collection<Conflict>;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}
export = TimeSuggestion;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
