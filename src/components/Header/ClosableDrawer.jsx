import React, {useCallback, useState} from 'react'
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import HistoryIcon from '@material-ui/icons/History'
import PersonIcon from '@material-ui/icons/Person'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import {makeStyles} from '@material-ui/core'
import {TextInput} from '../UIkit/index'
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import {signOut} from '../../reducks/users/operations'

const useStyles = makeStyles((theme)=>({
    drawer:{
        [theme.breakpoints.up('sm')]:{
            flexShrink: 0,
            width: 256,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper:{
        width: 256
    },
    searchField:{
        alignItems: 'center',
        display: 'flex',
        marginLeft: 32
    }
}))

const ClosableDrawer = (props)=>{
    const classes = useStyles()
    const dispatch = useDispatch()
    const [keyword, setKeyword] = useState('')
    const {container} = props

    const inpuKeyword = useCallback((e)=>{
        setKeyword(e.target.value)
    },[setKeyword])

    const selectMenu = (e, path) =>{
        dispatch(push(path))
        props.onClose(e, props.open)
    }

    const menus = [
        {func: selectMenu, label: '商品登録' ,   icon:<AddCircleIcon />, id:"register", value:`/product/edit`},
        {func: selectMenu, label: '注文履歴' ,   icon:<HistoryIcon />,   id:"history",  value:`/order/history`},
        {func: selectMenu, label: 'プロフィール' ,icon:<PersonIcon />,    id:"profile", value:`/user/mypage`},
    ]

    return(
        <nav className={classes.drawer}>
            <Drawer
                container={container}
                variant="temporary"
                anchor={"right"}
                open={props.open}
                onClose={(e)=>props.onClose(e, props.open)}
                classes={{paper: classes.drawerPaper}}
                ModalProps={{keepMounted: true}}
            >
                <div
                    onClose={(e)=>props.onClose(props.open)}
                    onKeyDown={(e)=>props.onClose(props.open)}
                >
                    <div className={classes.searchField}>
                        <TextInput
                            fullWidth={false} label="キーワードを入力" multiline={false} rows={1}
                            required={false} type={"text"} value={keyword} onChange={inpuKeyword}
                        />
                    </div>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {
                        menus.map(menu=>(
                            <ListItem button key={menu.id} onClick={(e)=> menu.func(e, menu.value)} >
                                <ListItemIcon>
                                    {menu.icon}
                                </ListItemIcon>
                                <ListItemText primary={menu.label} />
                            </ListItem>
                        ))
                    }
                    <ListItem button key="logout" onClick={()=>dispatch(signOut())}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Logout"} />
                    </ListItem>
                </List>
            </Drawer>
        </nav>
    )
}

export default ClosableDrawer