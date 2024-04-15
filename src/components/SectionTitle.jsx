function SectionTitle({ subTitle, title, additionalClass }) {
  return (
    <div
      className={`section-title title-style-three text-center ${additionalClass}`}
    >
      <span className="sub-title">{subTitle}</span>
      <h2 className="title">{title}</h2>
    </div>
  );
}

export default SectionTitle;
