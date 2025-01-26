export interface DataStructYear {
  year: string;
  total: number;
  range: {
    start: string;
    end: string;
  };
}

export interface DataStructContribution {
  date: string;
  count: number;
  color: string;
  intensity: number;
}

export interface DataStruct {
  years: DataStructYear[];
  contributions: DataStructContribution[];
}

export interface YearLink {
  href: string;
  text: string;
}

export type ContributionValue = {
  date: string;
  count: number;
  color: string | undefined;
  intensity: string | number;
};

export type ContributionData = {
  year: string;
  total: number;
  range: {
    start: string | undefined;
    end: string | undefined;
  };
  contributions: ContributionValue[] | Record<number, Record<number, Record<number, ContributionValue>>>;
};

export type AllYearsData = {
  years: Record<string, ContributionData> | ContributionData[];
  contributions: ContributionValue[] | Record<number, Record<number, Record<number, ContributionValue>>>;
};
