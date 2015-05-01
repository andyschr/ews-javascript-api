module Microsoft.Exchange.WebServices.Data {
  export enum PropertyDefinitionFlags {
    None= 0,
    AutoInstantiateOnRead= 1,
    ReuseInstance= 2,
    CanSet= 4,
    CanUpdate= 8,
    CanDelete= 16,
    CanFind= 32,
    MustBeExplicitlyLoaded= 64,
    UpdateCollectionItems= 128
  }
}

import _export = Microsoft.Exchange.WebServices.Data.PropertyDefinitionFlags;
export =_export;
