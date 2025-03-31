import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-ash hover:text-accent transition-colors' />
    ),
    href: '#',
  },
  {
    title: 'Properties',
    icon: (
      <Package className='h-full w-full text-ash hover:text-accent transition-colors' />
    ),
    href: '#',
  },
  {
    title: 'Components',
    icon: (
      <Component className='h-full w-full text-ash hover:text-accent transition-colors' />
    ),
    href: '#',
  },
  {
    title: 'Activity',
    icon: (
      <Activity className='h-full w-full text-ash hover:text-accent transition-colors' />
    ),
    href: '#',
  },
  {
    title: 'Change Log',
    icon: (
      <ScrollText className='h-full w-full text-ash hover:text-accent transition-colors' />
    ),
    href: '#',
  },
  {
    title: 'Email',
    icon: (
      <Mail className='h-full w-full text-ash hover:text-accent transition-colors' />
    ),
    href: '#',
  },
  {
    title: 'Theme',
    icon: (
      <SunMoon className='h-full w-full text-ash hover:text-accent transition-colors' />
    ),
    href: '#',
  },
];

export function AppleStyleDock() {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <Dock className='items-end'>
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className='aspect-square rounded-full bg-pure-black/80 backdrop-blur-sm border border-ash/10 hover:border-accent/30 transition-colors'
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}