module Microsoft.Exchange.WebServices.Data {
  export enum ExchangeVersion {
    Exchange2007_SP1= 0,
    Exchange2010= 1,
    Exchange2010_SP1= 2,
    Exchange2010_SP2= 3,
    Exchange2013= 4,
    Exchange2013_SP1= 5,
    Exchange_Version_Not_Updated= 15000,
  }
}

import _export = Microsoft.Exchange.WebServices.Data.ExchangeVersion;
export =_export;
