import { Divider, Title, Paragraph, BulletedParagraph, MyLink } from '.'

const Section = ({ title, paragraphs, link, bulleted }) => {
  return (
    <>
      <Divider />
      <div className="flex flex-col pl-16 pr-16">
        <Title text={title} />
        {paragraphs.map((p, i) => {
          return bulleted ? <BulletedParagraph key={i} text={p} /> : <Paragraph key={i} text={p} />
        })}
        {link && <MyLink href={link.href} text={link.text} />}
      </div>
    </>
  );
};

export default Section;
