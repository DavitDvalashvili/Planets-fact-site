export interface HeaderProps {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  activePage: string;
}

export interface CategoryType {
  ChooseColor: (parameter: number) => string;
  activeIndex: number;
  categoryINdex: number;
}

export interface InfoPropsType {
  categoryIndex: number;
  activeIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  ChooseColor: (parameter: number) => string;
  innerWidth: number;
}

export interface InfoType {
  activeIndex: number;
  categoryIndex: number;
  ChooseColor: (parameter: number) => string;
}

export interface StatisticsType {
  activeIndex: number;
}
