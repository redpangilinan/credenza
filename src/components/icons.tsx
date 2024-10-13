import { Coffee, Command, Moon, MoveRight, SunMedium } from "lucide-react"

export type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

const icons = {
  logo: Command,
  sun: SunMedium,
  moon: Moon,
  link: MoveRight,
  coffee: Coffee,
}

export const Icons: IconsType = icons
