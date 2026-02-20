export default function SkeletonElement({ className = "", style = {} }) {
  const classes = `skeleton-element ${className}`;

  return <div className={classes} style={style}></div>;
}
