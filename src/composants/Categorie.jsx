import DetailCategorie from "./DetailCategorie";
import { fetchData, useFetchData } from '../api-integrations/getFromApi';
function Categorie(props){
    // const boucles=[];
    // for(let i=0;i<props.selections.length;i++){
    //     boucles.push(<DetailCategorie details={props.selections[i]} titre={props.titre}></DetailCategorie>);
    // }
    const apiUrl = 'http://172.10.19.71:8080/categorie';
    const donnees = useFetchData(apiUrl);
    console.log(donnees);
    return <div>Helooo</div>
    
}
export default Categorie;