import * as React from 'react'
import type { SVGProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface FirebaseProps extends SVGProps<SVGSVGElement> {
  className?: string
}

function Firebase({ className }: FirebaseProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Firebase"
      x="0px"
      y="0px"
      width="512"
      height="512"
      className={twMerge('h-20 w-20', className)}
    >
      <path
        fill="#ffa000"
        d="M17.474 103.276 33.229 2.462a2.91 2.91 0 0 1 5.44-.924l16.294 30.39 6.494-12.366a2.91 2.91 0 0 1 5.15 0l43.97 83.714H17.474Z"
      >
      </path>
      <path
        fill="#f57c00"
        d="M71.903 64.005 54.955 31.913l-37.481 71.363Z"
      >
      </path>
      <path
        fill="#ffca28"
        d="M110.577 103.276 98.51 28.604a2.913 2.913 0 0 0-1.984-2.286 2.906 2.906 0 0 0-2.94.714l-76.112 76.243 42.115 23.618a8.728 8.728 0 0 0 8.51 0l42.478-23.618Z"
      >
      </path>
      <path
        fill="#fff"
        fillOpacity=".2"
        d="M98.51 28.604a2.913 2.913 0 0 0-1.984-2.286 2.906 2.906 0 0 0-2.94.713L78.479 42.178 66.6 19.562a2.91 2.91 0 0 0-5.15 0l-6.494 12.365L38.662 1.538A2.91 2.91 0 0 0 35.605.044a2.907 2.907 0 0 0-2.384 2.425L17.474 103.276h-.051l.05.058.415.204 75.676-75.764a2.91 2.91 0 0 1 4.932 1.571l11.965 74.003.116-.073L98.51 28.603Zm-80.898 74.534L33.228 3.182A2.91 2.91 0 0 1 35.613.756a2.911 2.911 0 0 1 3.057 1.495l16.292 30.39 6.495-12.366a2.91 2.91 0 0 1 5.15 0L78.245 42.41 17.61 103.138Z"
      >
      </path>
      <path
        fill="#a52714"
        d="M68.099 126.18a8.728 8.728 0 0 1-8.51 0l-42.015-23.55-.102.647 42.115 23.61a8.728 8.728 0 0 0 8.51 0l42.48-23.61-.11-.67-42.37 23.575z"
        opacity=".2"
      >
      </path>
    </svg>
  )
}

export { Firebase }
