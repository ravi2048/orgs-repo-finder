import { createContext, FC, ReactNode, useState } from 'react';
import { DataContextType, ICompleteResponse } from '../interfaces';

interface Props {
  children: ReactNode;
}

const contextDefaultValues: DataContextType = {
  globalData: [],
  updateGlobalData: () => {},
};

export const DataContext = createContext<DataContextType>(contextDefaultValues);

const DataContextProvider: FC = (props:any) => {
  const [globalData, setGlobalData] = useState<ICompleteResponse[]>(
    contextDefaultValues.globalData
  );

  const updateGlobalData = (data: ICompleteResponse[]) => {
    setGlobalData(data);
  };
  return (
    <DataContext.Provider value={{ globalData, updateGlobalData }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
