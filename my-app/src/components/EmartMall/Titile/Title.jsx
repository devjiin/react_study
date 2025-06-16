const Title = ({ shortcutLandingUrl, shortcutText, title }) => {
  return (
    <>
      <h2 className="text__title">{title}</h2>
      {shortcutText && (
        <a
          href={shortcutLandingUrl}
          className="sprite__smilefresh--after link__view-all"
        >
          {shortcutText}
        </a>
      )}
    </>
  );
};

export default Title;
