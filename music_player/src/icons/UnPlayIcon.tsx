import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={50}
      height={50}
      aria-hidden="true"
      data-prefix="fas"
      data-icon="play-circle"
      viewBox="0 0 512 512">
      <Path
        fill={props.color}
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
      />
    </Svg>
  );
}

const UnPlayIcon = React.memo(SvgComponent);
export default UnPlayIcon;
