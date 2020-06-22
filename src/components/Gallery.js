import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext'
import Gallery from 'react-grid-gallery'

const ArtGallery = props => {
    const { actions, store } = useContext(Context)
    const tagStyle = { 
        color: "rgba(255, 255, 255, 1)", 
        fontSize: "14px", 
        textTransform: "uppercase",
        backgroundColor: "rgba(0, 0, 0, .5)", 
        padding: "2px",
        borderRadius: "2px"
        
    } 
    useEffect(()=>{
        actions.create()
    },[actions])
    return(
            <div className="container py-4" >
                <h1 className="text-center">Galería</h1>
                <div className="row m-0 mt-3">
                    <div className="col-md-12 px-4">
                        <div style={{display: "block"}}>
                            <Gallery
                                tagStyle={tagStyle}
                                margin={10}
                                rowHeight={250}
                                images={
                                    store.images.map(img => { 
                                        return img
                                    })
                                }
                                enableImageSelection={false} /> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }



export default ArtGallery