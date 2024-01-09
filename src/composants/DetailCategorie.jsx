function DetailCategorie(props){
    const nom="nom"+props.titre;
    console.log("nom="+nom);
    return <button className="shadow-xl " key={props.details.id}>{props.details.nom}</button>
}
export default DetailCategorie;