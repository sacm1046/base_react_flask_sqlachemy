const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            bottles: [
                { country: "Image1", image: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" },
                { country: "Image2", image: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" },
                { country: "Image3", image: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" },
                { country: "Image4", image: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" },
            ],
            images: [],
        },
        actions: {
            create: () => {
                let store = getStore()
                let images = []
                store.bottles.length > 0 &&
                store.bottles.map(bottles=>{
                    let a = {
                        src: bottles.image,
                        thumbnail: bottles.image,
                        thumbnailWidth: 100,
                        thumbnailHeight: 100,
                        caption: bottles.country,
                        tags:[{value:bottles.country, title:bottles.country}]
                    }
                    images.push(a) 
                    return null
                })
                setStore({ images: images })
                console.log(store.images)
            }, 
        }
    }
}
export default getState;