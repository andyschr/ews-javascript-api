class SearchFolderSchema extends FolderSchema {
    static SearchParameters: PropertyDefinition;
    static Instance: SearchFolderSchema;
    RegisterProperties(): any { throw new Error("Not implemented."); }
}

module SearchFolderSchema {
    export module FieldUris {
        export var /* static*/ SearchParameters: string = "folder:SearchParameters";
    }
}


export = SearchFolderSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

