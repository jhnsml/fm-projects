export type Country = {
	name: Name;
	tld?: string[];
	cca2: string;
	ccn3?: string;
	cca3: string;
	cioc?: string;
	independent?: boolean;
	status: Status;
	unMember: boolean;
	currencies?: Currencies;
	idd: Idd;
	capital?: string[];
	altSpellings: string[];
	region: Region;
	subregion?: string;
	languages?: Record<string, string>;
	translations: Record<string, Translation>;
	latlng: number[];
	landlocked: boolean;
	area: number;
	demonyms?: Demonyms;
	flag: string;
	maps: Maps;
	population: number;
	fifa?: string;
	car: Car;
	timezones: string[];
	continents: Continent[];
	flags: CoatOfArms;
	coatOfArms: CoatOfArms;
	startOfWeek: StartOfWeek;
	capitalInfo: CapitalInfo;
	borders?: string[];
	postalCode?: PostalCode;
	gini?: { [key: string]: number };
};

export type CapitalInfo = {
	latlng?: number[];
};

export type Car = {
	signs?: string[];
	side: "left" | "right";
};

export type CoatOfArms = {
	png?: string;
	svg?: string;
};

export type Continent =
	| "Africa"
	| "Antarctica"
	| "Asia"
	| "Europe"
	| "North America"
	| "Oceania"
	| "South America";

export type SupportedCurrencies =
	| "XCD"
	| "EUR"
	| "DKK"
	| "FOK"
	| "PKR"
	| "FJD"
	| "MNT"
	| "AUD"
	| "USD"
	| "NOK"
	| "MRU"
	| "TRY"
	| "AED"
	| "CDF"
	| "XPF"
	| "RWF"
	| "GBP"
	| "IMP"
	| "IDR"
	| "ZMW"
	| "JEP"
	| "UYU"
	| "CAD"
	| "PEN"
	| "KHR"
	| "FKP"
	| "PGK"
	| "SCR"
	| "LRD"
	| "CVE"
	| "CUC"
	| "CUP"
	| "DJF"
	| "LBP"
	| "MMK"
	| "KYD"
	| "XAF"
	| "ZAR"
	| "SRD"
	| "CRC"
	| "CHF"
	| "NZD"
	| "KPW"
	| "UAH"
	| "XOF"
	| "TVD"
	| "MAD"
	| "MDL"
	| "OMR"
	| "YER"
	| "KWD"
	| "EGP"
	| "ILS"
	| "JOD"
	| "COP"
	| "MKD"
	| "QAR"
	| "TWD"
	| "MGA"
	| "BSD"
	| "ANG"
	| "SBD"
	| "SHP"
	| "HNL"
	| "AMD"
	| "GTQ"
	| "CZK"
	| "MUR"
	| "GEL"
	| "PHP"
	| "ALL"
	| "JMD"
	| "RSD"
	| "CLP"
	| "GYD"
	| "TZS"
	| "BDT"
	| "DOP"
	| "KRW"
	| "BBD"
	| "NGN"
	| "BHD"
	| "KID"
	| "STN"
	| "CNY"
	| "KES"
	| "MVR"
	| "BND"
	| "SGD"
	| "GNF"
	| "MOP"
	| "ERN"
	| "SEK"
	| "GHS"
	| "BGN"
	| "BWP"
	| "IRR"
	| "BOB"
	| "BYN"
	| "BMD"
	| "KZT"
	| "LAK"
	| "UZS"
	| "MYR"
	| "ISK"
	| "PYG"
	| "BRL"
	| "ETB"
	| "HUF"
	| "SDG"
	| "SOS"
	| "AOA"
	| "SAR"
	| "ZWL"
	| "VES"
	| "GMD"
	| "BZD"
	| "DZD"
	| "SYP"
	| "JPY"
	| "RUB"
	| "LSL"
	| "TND"
	| "AWG"
	| "HRK"
	| "AFN"
	| "SLL"
	| "IQD"
	| "KMF"
	| "VND"
	| "CKD"
	| "SZL"
	| "TOP"
	| "GGP"
	| "NAD"
	| "TTD"
	| "BTN"
	| "INR"
	| "HKD"
	| "SSP"
	| "TJS"
	| "UGX"
	| "WST"
	| "AZN"
	| "LKR"
	| "ARS"
	| "HTG"
	| "NPR"
	| "TMT"
	| "MWK"
	| "GIP"
	| "VUV"
	| "MXN"
	| "BAM"
	| "RON"
	| "KGS"
	| "THB"
	| "BIF"
	| "MZN"
	| "NIO"
	| "PAB"
	| "PLN"
	| "LYD";

export type Currencies = {
	[Currency in SupportedCurrencies]?: CurrencyObj;
};

export type CurrencyObj = {
	name: string;
	symbol?: string;
};

export type Demonyms = Record<string, InhabitantName>;

export type InhabitantName = {
	f: string;
	m: string;
};

export type Idd = {
	root?: string;
	suffixes?: string[];
};

export type Maps = {
	googleMaps: string;
	openStreetMaps: string;
};

export type Name = Translation & {
	nativeName?: Record<string, Translation>;
};

export type Translation = {
	official: string;
	common: string;
};

export type PostalCode = {
	format: string;
	regex?: string;
};

export type Region =
	| "Africa"
	| "Americas"
	| "Antarctic"
	| "Asia"
	| "Europe"
	| "Oceania";

export type StartOfWeek = "monday" | "saturday" | "sunday";

export type Status = "officially-assigned" | "user-assigned";
