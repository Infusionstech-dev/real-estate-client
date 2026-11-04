export default function Container({
  as: ContainerTag = "div",
  className = "",
  children,
}) {
  return (
    <ContainerTag className={`site-container ${className}`}>
      {children}
    </ContainerTag>
  );
}
