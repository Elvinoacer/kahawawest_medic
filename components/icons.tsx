import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconStethoscope = (p: IconProps) => (
  <Base {...p}>
    <path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3" />
    <path d="M9 12.5v3A5.5 5.5 0 0 0 20 15v-2.5" />
    <circle cx="20" cy="10.5" r="2" />
    <path d="M3 3h3M12 3h3" />
  </Base>
);

export const IconBaby = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="7" r="4" />
    <path d="M10 6.5h.01M14 6.5h.01M11 9c.6.5 1.4.5 2 0" />
    <path d="M5.5 21c.5-3.5 3-6 6.5-6s6 2.5 6.5 6" />
  </Base>
);

export const IconBone = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17l7-7" />
    <path d="M6.2 12.8a2.6 2.6 0 1 0-3.4 3.5 2.6 2.6 0 1 0 3.5 3.4 2.6 2.6 0 0 0 4.1-.4 2.6 2.6 0 0 0-.6-3.1l.5-.5a2.6 2.6 0 0 0 3.1.6 2.6 2.6 0 0 0 .4-4.1 2.6 2.6 0 1 0-3.4-3.4" transform="rotate(0 12 12) translate(3 -3)" />
  </Base>
);

export const IconEye = (p: IconProps) => (
  <Base {...p}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="3" />
  </Base>
);

export const IconFlask = (p: IconProps) => (
  <Base {...p}>
    <path d="M10 3h4M10.5 3v5.2L5.8 17a3 3 0 0 0 2.7 4.4h7a3 3 0 0 0 2.7-4.4L13.5 8.2V3" />
    <path d="M7.5 14.5h9" />
  </Base>
);

export const IconBed = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 7v13M3 16h18M21 20v-7a3 3 0 0 0-3-3H10v6" />
    <circle cx="6.5" cy="11.5" r="1.7" />
  </Base>
);

export const IconPhone = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 4h4l1.5 4.5-2.2 1.6a12.5 12.5 0 0 0 5.6 5.6l1.6-2.2L20 15v4a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
  </Base>
);

export const IconCalendar = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.5" y="5" width="17" height="16" rx="3" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
    <path d="M8 14.5h2.5M13.5 14.5H16M8 17.5h2.5" />
  </Base>
);

export const IconWalk = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12.5" cy="4" r="1.8" />
    <path d="M12.5 8.5 10 21M12.5 8.5l2.3 4.5 2.7 2M12.5 8.5 9 11l-1.5 3M12 13.5 8.5 21M14.8 13l2 8" />
  </Base>
);

export const IconShield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l7 3v5.5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5V6l7-3Z" />
    <path d="M9 12l2 2 4-4.5" />
  </Base>
);

export const IconClock = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Base>
);

export const IconPin = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s-6.5-5.3-6.5-10a6.5 6.5 0 0 1 13 0c0 4.7-6.5 10-6.5 10Z" />
    <circle cx="12" cy="10.5" r="2.3" />
  </Base>
);

export const IconArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12h15M14 6.5 19.5 12 14 17.5" />
  </Base>
);

export const IconArrowDown = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4v15M6.5 14 12 19.5 17.5 14" />
  </Base>
);

export const IconCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="M4.5 12.5 10 18 19.5 6.5" />
  </Base>
);

export const IconAlert = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.5 22 20H2L12 3.5Z" />
    <path d="M12 10v4.5M12 17.2h.01" />
  </Base>
);

export const IconLang = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.3 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.3-3.8-8.5s1.3-6.2 3.8-8.5Z" />
  </Base>
);

export const IconHeart = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 20s-7.5-4.8-7.5-10A4.4 4.4 0 0 1 12 7.3 4.4 4.4 0 0 1 19.5 10c0 5.2-7.5 10-7.5 10Z" />
  </Base>
);

export const IconMenu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const IconClose = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);

export const IconPlus = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14M5 12h14" />
  </Base>
);

export const IconWhatsapp = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2a9.9 9.9 0 0 0-8.6 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Zm0 18.2a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.3-1 .1-.2 0-.4 0-.5L9.3 8.2c-.1-.3-.3-.3-.5-.3h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3Z" />
  </svg>
);

export const IconLogo = (p: IconProps) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...p}>
    <rect width="64" height="64" rx="16" fill="#0c3b2e" />
    <path
      d="M20 49V31a12 12 0 0 1 24 0v18"
      fill="none"
      stroke="#e9b44c"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M32 33v11M26.5 38.5h11"
      stroke="#faf6ee"
      strokeWidth="4.2"
      strokeLinecap="round"
    />
  </svg>
);
