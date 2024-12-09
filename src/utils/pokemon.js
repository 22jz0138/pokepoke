export const getAllPokemon = (url) => {
    return new Promise((resolve,reject) => {
        fetch(url)
        .then((res) => res.json())
        .then((data)=> resolve(data));
    });
};
//resolveは成功したとき・rejectは失敗したとき

export const getPokemon = (url) =>{
    return new Promise((resolve,reject) =>{
        fetch(url)
        .then((res) => res.json())
        .then((data)=> {
            resolve(data);
            // console.log(data);
            
        });
    })
}