
    class TimeZoneTransition extends ComplexProperty {
        private static PeriodTarget: string = "Period";
        private static GroupTarget: string = "Group";

        TargetPeriod: TimeZonePeriod;
        TargetGroup: TimeZoneTransitionGroup;
        private timeZoneDefinition: TimeZoneDefinition;
        private targetPeriod: TimeZonePeriod;
        private targetGroup: TimeZoneTransitionGroup;
        Create(timeZoneDefinition: TimeZoneDefinition, xmlElementName: string): TimeZoneTransition { throw new Error("Not implemented."); }
        CreateTimeZoneTransition(timeZoneDefinition: TimeZoneDefinition, targetPeriod: TimeZonePeriod, transitionTime: any): TimeZoneTransition { throw new Error("Not implemented."); }
        CreateTransitionTime(): any { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InitializeFromTransitionTime(transitionTime: any): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
