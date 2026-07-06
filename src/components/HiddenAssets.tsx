export type HiddenAssetsProps = {
  variant: string;
  containerVariant: string;
  imageUrl: string;
  imageAlt: string;
  text: string;
};

export const HiddenAssets = (props: HiddenAssetsProps) => {
  if (props.variant === "text") {
    return (
      <p className="box-border caret-transparent text-stone-50 hidden text-sm h-px tracking-[0.7px] leading-[19px] outline-[3px] absolute no-underline w-px overflow-hidden -m-px">
        {props.text}
      </p>
    );
  }

  if (props.variant === "empty") {
    return (
      <div
        className={`box-border caret-transparent text-stone-50 outline-[3px] no-underline ${props.containerVariant}`}
      ></div>
    );
  }

  if (props.variant === "iframe") {
    return (
      <div className="box-border caret-transparent text-stone-50 outline-[3px] no-underline">
        <iframe className="box-border caret-transparent hidden outline-[3px] no-underline align-baseline"></iframe>
      </div>
    );
  }

  return (
    <div
      className={`box-border caret-transparent text-stone-50 outline-[3px] no-underline ${props.containerVariant}`}
    >
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className="box-border caret-transparent max-w-full outline-[3px] no-underline"
      />
    </div>
  );
};
