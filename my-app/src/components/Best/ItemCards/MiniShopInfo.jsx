const MiniShopInfo = ({ miniShopInfo }) => {
  const { nickName, url } = miniShopInfo || {};
  return (
    <a href={url} className="link__minishop sprite">
      <span className="text__shop">{nickName}</span>
    </a>
  );
};

export default MiniShopInfo;
