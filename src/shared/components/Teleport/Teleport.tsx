import { createPortal } from 'react-dom';

interface TeleportProps {
  children: React.ReactNode;
  node?: HTMLElement;
}

export const Teleport = ({ children, node = document.body }: TeleportProps) => {
  return createPortal(children, node);
};
