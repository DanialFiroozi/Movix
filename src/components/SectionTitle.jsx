function SectionTitle({ subTitle, title }) {
  return (
    <div className="section-title title-style-three text-center text-lg-left">
      <span className="sub-title">{subTitle}</span>
      <h2 className="title">{title}</h2>
    </div>
  );
}

export default SectionTitle;
