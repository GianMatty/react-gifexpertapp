

    

    //PETICION HTTP USANDO ASYNC AWAIT
export const getGifs = async ( category ) => { 
        // const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=2CmfNfZ7UKsH05sgBoT1281tzu3PZYGS'
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=2CmfNfZ7UKsH05sgBoT1281tzu3PZYGS`
        const resp = await fetch(url);//peticion http
        const {data} = await resp.json();//Se hace eso ya que viene en formato json

        const gifs = data.map( img => {
            return { 
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url //?: eso quiere decir q el images es opcional si existe
            }
        })
        
        return gifs;
    }


    //PETICION HTTP USANDO PROMESAS
    /*const getGifs = () => { 
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=2CmfNfZ7UKsH05sgBoT1281tzu3PZYGS'
        return new Promise((resolve, reject) => {
            const resp = fetch(url);//peticion http q toma tiempo
            resolve(resp)
        })
        .then( data => {
            return new Promise((resolve, reject) => {
                const datos = data.json();//Promesa tbn ya que toma tiempo
                resolve(datos)
            })
            .then( d => { console.log(d) });
        })
    }*/