export default function Option({ fruta, valor }) {
  return (
    <li className="option-item">
      {fruta}
      {valor && <span className="option-valor">R${' '}{Number(valor).toFixed(2).replace('.', ',')}</span>}
    </li>
  );
}