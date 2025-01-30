function nombreResoluccion(ancho, alto){
    if (ancho >= 7680 && alto >= 4320){
        return "8k";
    }else if(ancho >= 3840 && alto >= 2160){
        return "4k";
    }else if(ancho >= 2560 && alto >= 1440){
        return "WQHD";
    }else if(ancho >= 1920 && alto >= 1080){
        return "FHD";
    }else{
        return "HD";
    }
}
let nombre = nombreResoluccion(7680, 4320);
console.log(nombre) 

//8k   7680, 4320
//4k 3840, 2160
//WQHD 2560, 1440
//FHD  1920, 1080
// hd   1280, 720