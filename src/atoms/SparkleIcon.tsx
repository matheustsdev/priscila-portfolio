
interface SparckleIconProps extends React.SVGProps<SVGSVGElement> {}

function SparkleIcon(props: SparckleIconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={ props.width ?? 240}
        height={props.height ?? 240}
        viewBox="0 0 227.25 226.499992"
      >
        <path
            fill={props.fill ?? "#ffd230"}
            d="M226.14 107.184l-68.156-1.586L209.461 56l-24.184-25.102-55.34 55.008 4.961-84.703L99.43.176l-3.637 79.816-50.598-48.699-26.328 23.66 55.692 53.07-73.782.961L0 142.41l68.121 3.024-58.258 46.668 25.918 26.902 64.121-64.016-11.953 69.5 40.461 1.172-6.015-58.3 53.918 44.827 21.18-19.039-49.645-50.78 77.441 1.573zm0 0"
        />
      </svg>
    )
  }
  
  export default SparkleIcon