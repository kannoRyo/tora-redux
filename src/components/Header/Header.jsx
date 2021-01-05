import React ,{useState, useCallback}from 'react'
import {makeStyles} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import logo from '../../assets/img/icons/logo2.png'
import { useDispatch, useSelector } from 'react-redux';
import { getIsSignedIn } from '../../reducks/users/selectors';
import {push} from 'connected-react-router'
import {
    HeaderMenus,
    ClosableDrawer
} from './index'

const useStyles = makeStyles({
    root:{
        flexGrow: 1,
    },
    menuBar:{
        backgroundColor: '#fff',
        color: '#444',
    },
    toolbar:{
        margin: '0 auto',
        maxWidth: 1024,
        width: '100%'
    },
    iconButtons:{
        margin: '0 0 0 auto'
    }
})

const Header = ()=>{
    const dispatch = useDispatch()
    const classes = useStyles()
    const [open ,setOpen] = useState(false)
    const selector = useSelector(state=> state)
    const isSignedIn = getIsSignedIn(selector)

    const handleDrawerToggle = useCallback((e ,isOpen) => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return;
        }

        setOpen(!isOpen)
    }, [setOpen]);

    return(
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.menuBar}> 
                <Toolbar className={classes.toolbar}>
                    <img 
                        src={logo} alt="ロゴ" width="128px" height="40" 
                        onClick={() => dispatch(push('/'))}
                    />
                    {
                        isSignedIn &&(
                            <div className={classes.iconButtons}>
                                <HeaderMenus handleDrawerToggle={handleDrawerToggle}/>
                            </div>
                        )
                    }
                </Toolbar>
            </AppBar>
            <ClosableDrawer open={open} onClose={handleDrawerToggle}/> 
        </div>
    )
}

export default Header