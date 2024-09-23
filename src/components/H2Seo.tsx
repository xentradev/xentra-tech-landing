interface Props {
  text: string;
}

export default function H2Seo({ text }: Props) {
  return <h2 style={{ opacity: 0, fontSize: 0 }}>{text}</h2>;
}
