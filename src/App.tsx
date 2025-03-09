import { useEffect, useState } from 'react'
import List from './components/List';
import Details from './components/Details';
import './App.css'

export type infoType = {
  id: number,
  name: string,
  avatar: string,
  details: {
      city: string,
      company: string,
      position: string
  }
};

const listIdLink = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

function App() {

  const [list, setList] = useState<{ id: number, name: string }[]>([]);

  const [selected, setSelected] = useState<{ id: number, name: string } | undefined>(undefined);

  const [info, setInfo] = useState<infoType | null>(null)

  useEffect(() => {
    fetch(listIdLink)
      .then(data => data.json())
      .then(json => setList(json)) // Сохраняем данные в состояние
      .catch(err => console.error('Ошибка загрузки списка с айдишниками', err));
  }, []);


  useEffect(() => {
    if (selected !== undefined) {
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${selected.id}.json`)
      .then(data => data.json())
      .then(json => setInfo(json))
      .catch(err => console.error('Ошибка загрузки info', err));
    }

  }, [selected]);


  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    setSelected({ id: Number(target.id), name: target.name });
  }

  return (
    <>
      <List list={list} onClick={handleClick} />
      {info && <Details {...info} />}
    </>
  );
  
}

export default App


