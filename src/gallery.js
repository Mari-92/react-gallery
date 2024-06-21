import Box from './Box'
import './style.css'
import oneimage from './assets/images/dog1.jpeg'
import twoimage from './assets/images/bitbull.jpg'
import threeimage from './assets/images/husky.jpg'
import fourimage from './assets/images/hutch.jpg'
import fiveimage from './assets/images/hybrid.jpg'
import siximage from './assets/images/image6.jpg'
import sevenimage from './assets/images/puppy.jpg'
import eightimage from './assets/images/rottwiller.jpg'

var doglist = [
    {
        "dogimg": oneimage,
        "dogname":"Cute Pupies"
    },
    {
        "dogimg":twoimage,
        "dogname":"Bitbull very Aggressive"
    },
    {
        "dogimg":threeimage,
        "dogname":"Wolf-husky"
    },
    {
        "dogimg":fourimage,
        "dogname":"Vodafone-Dog"
    },
    {
        "dogimg":fiveimage,
        "dogname":"Labaorder-Dog"
    },
    {
        "dogimg":siximage,
        "dogname":"Kangal"
    },
    {
        "dogimg":sevenimage,
        "dogname":"Puppy"
    },
    {
        "dogimg":eightimage,
        "dogname":"Rottweiler"
    }
]

function Imagegallery() {
    return(
        <div>
            <h1>Image Gallery</h1>
            <div className='boxes'>
                {
                    doglist.map(function (item) {
                        return(
                            <Box dogimg={item.dogimg} dogname={item.dogname}></Box>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Imagegallery