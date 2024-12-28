type Props = {
  item: string;
  id: number;
  onCheck: (id: number) => void;
};

function List(props: Props) {
  return (
    <li
      onClick={() => {
        props.onCheck(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default List;
