import { useRef, useState, forwardRef } from "react";
import './AutoGrowingInput.scss';

const AutoGrowInput = forwardRef((props, ref) => {
  const { placeholder } = props;
  const inputRef = useRef();
  const curRef = ref || inputRef;

  return (
    <div className='input-sizer'>
      <input
        type="text"
        ref={curRef}
        onInput={(ev) => curRef.current.parentNode.dataset.value = curRef.current.value}
        size={(placeholder?.length || 0) + 4}
        {...props}
      />
    </div>
  );
});

export default AutoGrowInput;