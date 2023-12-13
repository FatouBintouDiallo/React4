
import { useState , useEffect} from 'react';


function App() {
const [fullName,setfullname] = useState()
const [bio,setbio]=useState()
const [image,setimage]=useState()
const [profession,setprofession]=useState()
const [state ,setState]=useState(0)
useEffect(()=>{
    setTimeout(()=>{
        setState((state)=> state + 1)
    },1000 )
})

const fullName1 = () =>{
    setfullname("Ada Lovelace")
    setbio("Née à Londres en 1815, Ada Lovelace est l’unique enfant légitime du poète Lord Byron. Très vite, elle développe un esprit vif et s’adonne aux disciplines scientifiques plutôt qu’artistiques. Sa mère, une aristocrate férue de mathématiques elle aussi, n’hésite pas à faire appel à des tuteurs expérimentés pour la faire travailler davantage dans ce domaine. Toutefois, pour la jeune fille, science et créativité se complètent plus qu’ils ne s’opposent.")
    setimage("image1.JPEG")
    setprofession("Ada Lovelace était développeuse , mathématicienne et informaticienne ")
       
}

return(
    <>
    <div style={{backgroundColor:"green", color:"white"}}>
    <h1>{fullName}</h1>
    <div style={{display:"flex", justifyContent:"space-around"}}>
    <p>{bio}</p>
    <img src={image} alt="" />
    </div>
    <p>{profession}</p>
    <h1>Time's {state}</h1>
 <button type='button' onClick={fullName1}>add to card</button>
 
 </div>
 </>
)
};

export default App;
