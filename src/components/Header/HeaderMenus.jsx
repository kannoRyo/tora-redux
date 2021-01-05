import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MenuItem from '@material-ui/icons/Menu'

const HeaderMenus = (props)=>{
    return(
        <>
            <IconButton>
                <Badge badgeContent={3} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
            <IconButton>
                <FavoriteBorderIcon/>
            </IconButton>
            <IconButton>
                <MenuItem onClick={(e)=> props.handleDrawerToggle(e)}/>
            </IconButton>
        </>
    )
}

export default HeaderMenus