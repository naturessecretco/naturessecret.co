import {
    atom,
    useRecoilState,
  } from 'recoil';
  
  const drawerState = atom({
    key: 'menuDrawerState', 
    default: false, 
  });

  const useMenuDrawerState = () => {

    const [open, setOpen] = useRecoilState(drawerState);

    const toggleDrawer = () => {
      setOpen(!open);
    };

    return { open, toggleDrawer };
  }

  
  export { drawerState }

  export default useMenuDrawerState
