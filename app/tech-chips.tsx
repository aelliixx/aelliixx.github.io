import type { ComponentType, SVGProps } from "react";
import {
  SiCplusplus,
  SiDocker,
  SiDotnet,
  SiFigma,
  SiGit,
  SiGooglecloud,
  SiJavascript,
  SiKde,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPerforce,
  SiPostgresql,
  SiPython,
  SiQt,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiUnrealengine,
  SiUnity,
  SiVuedotjs,
} from "react-icons/si";
import {FaAws, FaJava, FaSteam, FaWindows} from "react-icons/fa";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

// Longest / most specific matches first.
const ICONS: [RegExp, IconType][] = [
  [/react/i, SiReact],
  [/unreal/i, SiUnrealengine],
  [/unity/i, SiUnity],
  [/c\+\+|cpp/i, SiCplusplus],
  [/steam/i, FaSteam],
  [/perforce/i, SiPerforce],
  [/typescript/i, SiTypescript],
  [/javascript/i, SiJavascript],
  [/dotnet|\.net/i, SiDotnet],
  [/next/i, SiNextdotjs],
  [/node/i, SiNodedotjs],
  [/python/i, SiPython],
  [/postgres/i, SiPostgresql],
  [/vue/i, SiVuedotjs],
  [/kcache/i, SiKde],
  [/\bqt\b|qcalc/i, SiQt],
  [/\bgit\b/i, SiGit],
  [/tailwind/i, SiTailwindcss],
  [/figma/i, SiFigma],
  [/docker/i, SiDocker],
  [/aws|amazon/i, FaAws],
  [/googlecloud|gcp/i, SiGooglecloud],
  [/redis/i, SiRedis],
  [/mysql/i, SiMysql],
  [/linux/i, SiLinux],
  [/java/i, FaJava],
  [/windows/i, FaWindows],
];

function iconFor(tech: string): IconType | null {
  return ICONS.find(([pattern]) => pattern.test(tech))?.[1] ?? null;
}

export default function TechChips({
  items,
  label = "Tech used",
}: {
  items: string[];
  label?: string;
}) {
  return (
    <ul className="chips" aria-label={label}>
      {items.map((tech) => {
        const Icon = iconFor(tech);
        return (
          <li key={tech} className="mono">
            {Icon && <Icon aria-hidden="true" className="chip-ico" />}
            {tech}
          </li>
        );
      })}
    </ul>
  );
}
