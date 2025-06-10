const getDomain = () =>{

    const url = location.href;
    const lastSlashUrl = url.lastIndexOf("/");
    const domain = url.substring(lastSlashUrl + 1)
    
    return domain
}


console.log(getDomain());


