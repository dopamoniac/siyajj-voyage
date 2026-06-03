import { type LucideIcon } from "lucide-react";

const sizeMap = {
  sm:  { container: "w-9 h-9",    icon: 15 },
  md:  { container: "w-[42px] h-[42px]", icon: 18 },
  lg:  { container: "w-12 h-12",  icon: 20 },
  xl:  { container: "w-14 h-14",  icon: 22 },
} as const;

const variantMap = {
  default: "rounded-[14px]",
  circle:  "rounded-full",
  badge:   "rounded-[10px]",
  minimal: "rounded-none !bg-transparent !border-transparent !shadow-none",
} as const;

interface LuxuryIconProps {
  icon: LucideIcon;
  size?: keyof typeof sizeMap;
  variant?: keyof typeof variantMap;
  label?: string;
  className?: string;
  iconClassName?: string;
}

export function LuxuryIcon({
  icon: Icon,
  size = "md",
  variant = "default",
  label,
  className = "",
  iconClassName = "",
}: LuxuryIconProps) {
  const { container, icon: iconSize } = sizeMap[size];
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div
        className={`
          flex items-center justify-center flex-shrink-0
          bg-[rgba(199,154,59,0.08)] border border-[rgba(199,154,59,0.22)]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_18px_rgba(199,154,59,0.07)]
          ${container} ${variantMap[variant]}
        `}
      >
        <Icon
          size={iconSize}
          strokeWidth={1.4}
          className={`text-[#D7AE58] ${iconClassName}`}
        />
      </div>
      {label && (
        <span className="label-premium text-siyajj-muted-text">{label}</span>
      )}
    </div>
  );
}
