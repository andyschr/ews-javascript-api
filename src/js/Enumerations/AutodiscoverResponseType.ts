module Microsoft.Exchange.WebServices.Autodiscover {
  export enum AutodiscoverResponseType {
    Error = 0,
    RedirectUrl = 1,
    RedirectAddress = 2,
    Success = 3
  }
}

import _export = Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverResponseType;
export = _export;
