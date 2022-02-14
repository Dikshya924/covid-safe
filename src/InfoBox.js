       import React from 'react'
        import {Card,CardContent,Typography} from '@material-ui/core'
        import './InfoBox.css'
        function InfoBox({title,total}) {
            return (
                <div className="infos">
                    <Card className="infobox">
                        <CardContent>
                            <Typography className="infobox__title" color="textSecondary">
                                {title}
        
                            </Typography>
                            <h2 className="infobox__total">{total}</h2>
                            
        
                            
                        </CardContent>
                    </Card>
                </div>
            )
        }
        
        export default InfoBox
        
    
