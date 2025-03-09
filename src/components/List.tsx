type ListProps = {
    list: { id: number, name: string }[];
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  };
  
  const List = ({ list, onClick }: ListProps) => {
    return (
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <button id={String(item.id)} onClick={onClick}>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  export default List;
