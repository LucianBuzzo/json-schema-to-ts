// Note that "description" keywords is used for type annotation

/** Schema for representing a physical address */
interface CriminalCaseAddress {
    /** Raw address string - unparsed */
    raw: string;
    /** Primary street address */
    addressLineOne?: string;
    /** Secondary street address */
    addressLineTwo?: string | null;
    /** City name */
    city?: string;
    /** County name */
    county?: string;
    /** State or province */
    state?: string;
    /** Postal or ZIP code */
    postalCode?: string;
    /** Country name */
    country?: string;
}

/** Schema for representing a person's name */
interface CriminalCasePersonName {
    /** Raw full name string, before parsing */
    raw?: string;
    /** First/Given name */
    first: string;
    /** Middle name */
    middle?: string | null;
    /** Last/Family name */
    last: string;
    /** Name suffix */
    suffix?: string | null;
    /** Title/Prefix */
    prefix?: string | null;
}

/** Schema for representing a date with year, month, and day components */
interface CriminalCaseDate {
    /** Raw date string */
    raw: string;
    /** Four-digit year */
    year: number;
    /** Month (1-12) */
    month: number;
    /** Day (1-31) */
    day: number;
    /** Date in ISO 8601 format */
    iso: string;
}

interface CriminalCaseCharge {
    /** Unique identifier for the charge */
    chargeId: string;
    /** Count number for the charge */
    chargeCount: string;
    /** A description of the offense, for example "Assault and Battery" or "Burglary" or "Drug Possession" */
    offenseDescription: string;
    /** The offense code if available */
    offenseCode?: string | null;
    /** Date when the offense occurred */
    offenseDate: CriminalCaseDate;
    /** Severity level of the offense, for example "Misdemeanor" or "Felony", or "Infraction" */
    offenseSeverity: string;
    /** Description of how the charge was disposed */
    dispositionDescription?: string | null;
    /** Date when the charge was disposed */
    dispositionDate?: CriminalCaseDate | null;
    /** Sentence of the charge */
    sentence?: string;
    /** Additional comments about the charge (optional) */
    comments?: string | null;
    /** Class of the charge */
    class?: string;
    /** Subclass of the charge */
    subClass?: string;
    /** Metadata about the charge record */
    metadata?: {
        /** Source of the data */
        source: string;
        /** Identifier from the source system */
        sourceId: string;
    }
}

interface CriminalCase {
    /** Unique identifier for the case */
    caseId: string;
    /** Official court case number (may be the same as caseId) */
    caseNumber?: string;
    /** Name of the court */
    courtName: string;
    /** Date when the case was filed */
    caseFileDate?: CriminalCaseDate
    /** Jurisdiction where the case was (or is being) heard */
    caseJurisdiction: string;
    /** Location metadata for where the case was filed */
    location?: {
        /** ANSI state code representing where the case was filed */
        state: string;
        /** Federal Information Processing Standards (FIPS) county code */
        fipsCode: string;
    },
    defendant: {
        /** Defendant's name */
        name: CriminalCasePersonName;
        /** Defendant's date of birth */
        dateOfBirth: CriminalCaseDate;
        /** Defendant's gender */
        gender?: string;
        /** Defendant's race */
        race?: string;
        /** List of defendant's addresses */
        addresses: CriminalCaseAddress[];
    },
    /** Additional case comments (optional) */
    comments?: string;
    charges: CriminalCaseCharge[];
    metadata?: {
        source: string;
        sourceId: string;
    }
}

const exampleDate: CriminalCaseDate = {
    raw: "2022-03-15",
    year: 2022,
    month: 3,
    day: 15,
    iso: "2022-03-15"
}