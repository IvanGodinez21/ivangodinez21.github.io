import { Bars3Icon } from '@heroicons/react/24/solid';
import { Dispatch, SetStateAction } from 'react';

export default function MenuButton({
  id,
  state,
}: {
  id?: string;
  state: [boolean, Dispatch<SetStateAction<boolean>>];
}) {
  const [navHidden, setNavHidden] = state;

  return (
    <button
      aria-controls={id}
      aria-label={'Toggle main menu button'}
      aria-expanded={!navHidden}
      className={'btn-navbar-icon'}
      title={'Toggle main menu'}
      type={'button'}
      onPointerUp={() => setNavHidden(!navHidden)}
      onBlur={(e) => {
        if (!e.relatedTarget) setNavHidden(true);
      }}
    >
      <Bars3Icon className={'h-6 w-6'} />
    </button>
  );
}
