const Text = (props) => {
  const className = props.className ? props.className : '';
  if (props.as === 'title') {
    return (
      <p className={`font-extrabold text-4xl px-5 pb-4 ${className}`}>
        {props.children}
      </p>
    );
  } else if (props.as === 'caption') {
    return (
      <p className={`font-semibold text-lg px-5 pb-4 ${className}`}>
        {props.children}
      </p>
    );
  } else if (props.as === 'usecase-fading-text') {
    return (
      <p className={` text-lg px-5 pb-4 ${className}`}>{props.children}</p>
    );
  } else if (props.as === 'subTitle') {
    return (
      <p className={`font-bold text-xl px-2 ${className}`}>{props.children}</p>
    );
  } else if (props.as === 'custom') {
    return <p className={`px-2 ${className}`}>{props.children}</p>;
  } else {
    return <p className={`text-sm px-5 pb-4 ${className}`}>{props.children}</p>;
  }
};

export default Text;
