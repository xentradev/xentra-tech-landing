interface Props {
  text: string;
}

export default function H1Seo({ text }: Props) {
  return <h1 style={{ opacity: 0, fontSize: 0 }}>{text}</h1>;
}
