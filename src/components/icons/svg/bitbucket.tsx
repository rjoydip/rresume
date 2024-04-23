import { twMerge } from 'tailwind-merge'

interface BitbucketProps {
  className?: string
}

function Bitbucket({ className }: BitbucketProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Bitbucket"
      x="0px"
      y="0px"
      width="512"
      height="512"
      className={twMerge('h-20 w-20', className)}
    >
      <defs>
        <linearGradient
          id="bitbucket-original-a"
          gradientUnits="userSpaceOnUse"
          x1="28.593"
          y1="14.226"
          x2="16.672"
          y2="23.532"
          gradientTransform="scale(4)"
        >
          <stop offset=".176" stopColor="#0052cc"></stop>
          <stop offset="1" stopColor="#2684ff"></stop>
        </linearGradient>
      </defs>
      <path
        d="M19.082 20c-1.918 0-3.355 1.758-3.039 3.516l12.95 79.289c.32 2.078 2.077 3.515 4.155 3.515h62.66c1.442 0 2.72-1.12 3.04-2.558l13.109-80.086c.316-1.918-1.121-3.516-3.039-3.516zM74.07 77.227H54.09l-5.278-28.293h30.215zm0 0"
        fill="#2684ff"
      >
      </path>
      <path
        d="M107.64 48.934H78.868L74.07 77.227H54.09l-23.5 27.972s1.12.961 2.719.961h62.66c1.441 0 2.719-1.12 3.039-2.558zm0 0"
        fill="url(#bitbucket-original-a)"
      >
      </path>
    </svg>
  )
}

export { Bitbucket }
