import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      aria-hidden="true"
      data-prefix="fas"
      data-icon="mars"
      viewBox="0 0 384 512">
      <Path
        fill={props.color}
        d="M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12zM144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
      />
    </Svg>
  );
}

const FeMaleIcon = React.memo(SvgComponent);
export default FeMaleIcon;
