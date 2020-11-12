import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={16} height={16} viewBox="0 0 20 20" fill="none">
      <Path
        d="M9.468 17.268a7.8 7.8 0 100-15.601 7.8 7.8 0 000 15.601zM18.333 18.333L16.61 16.61"
        stroke={props.color}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const SearchIcon = React.memo(SvgComponent);
export default SearchIcon;
