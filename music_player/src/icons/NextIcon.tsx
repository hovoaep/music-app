import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={50}
      height={50}
      aria-hidden="true"
      data-prefix="fas"
      data-icon="forward"
      viewBox="0 0 512 512">
      <Path
        fill={props.color}
        d="M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"
      />
    </Svg>
  );
}

const NextIcon = React.memo(SvgComponent);
export default NextIcon;