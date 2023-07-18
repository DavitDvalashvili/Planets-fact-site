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
  innerWidth: number;
}

export interface InfoType {
  activeIndex: number;
}

export interface StatisticsType {
  activeIndex: number;
}
