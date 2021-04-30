import React from 'react'
import Icon from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/file-alert'

const IconMarker = ({lat,lng,onClick}) => {
    return (
        <div style={{fontSize : '3rem' , color : 'red'}} onClick="onClick">
            <Icon icon={locationIcon} />
        </div>
    )
}

export default IconMarker
