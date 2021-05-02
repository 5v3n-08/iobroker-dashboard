import { useCallback, useRef, useState } from 'react';

export const useLongPress = (
  onClick: (e: TouchEvent | MouseEvent) => void,
  onLongPress: (e: TouchEvent | MouseEvent) => void,
  { shouldPreventDefault = true, delay = 300 } = {}
): IUseLongPressReturn => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef<NodeJS.Timeout>();
  const target = useRef<HTMLSelectElement>();

  const start = useCallback(
    (event) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener('touchend', preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress(event);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault]
  );

  const clear = useCallback(
    (event, shouldTriggerClick = true) => {
      timeout.current && clearTimeout(timeout.current);
      shouldTriggerClick && !longPressTriggered && onClick(event);
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener('touchend', preventDefault);
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered]
  );

  return {
    onMouseDown: (e: any) => start(e),
    onTouchStart: (e: any) => start(e),
    onMouseUp: (e: any) => clear(e),
    onMouseLeave: (e: any) => clear(e, false),
    onTouchEnd: (e: any) => clear(e),
  };
};

const isTouchEvent = (event: TouchEvent | MouseEvent) => {
  return 'touches' in event;
};

const preventDefault = (event: TouchEvent | MouseEvent) => {
  if (!isTouchEvent(event)) return;

  if ((event as TouchEvent).touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

interface IUseLongPressReturn {
  onMouseDown: (e: any) => void;
  onTouchStart: (e: any) => void;
  onMouseUp: (e: any) => void;
  onMouseLeave: (e: any) => void;
  onTouchEnd: (e: any) => void;
}
