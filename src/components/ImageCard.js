import { useState, useEffect, useRef } from "react";

const ImageCard = (props) => {
  const [spans, setSpans] = useState(0);

  const imageRef = useRef();

  useEffect(() => {
    const height = imageRef.current.clientHeight;
    //بدست آوردن height هر عکس و تقسیم کردن آن مقدار بر 10 و سپس گرد کردن آن عدد
    const spanSize = Math.ceil(height / 10);
    setSpans(spanSize);
  }, []);

  return (
    //هر بار که یک عکس نمایش داده می شود، انتهای هر row برابر با انتهای آن عکس باشد تا عکس های بزرگ و کوچک همگی در یک ردیف قرار نگیرند
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} src={props.image.urls.small} />
    </div>
  );
};

export default ImageCard;
