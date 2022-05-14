
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';


const FloatingNavigator = (props) => {
    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >

            </SpeedDial>
        </>
    )
}


export default FloatingNavigator

