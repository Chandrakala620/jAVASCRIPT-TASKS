function encodeImageFileAsURL(element);
        {
        let reader=new FileReader();
        let f = element.files[0];
        reader.onloadend=function(){
            document.write('String Output: ',reader.result);}
        reader.readAsDataURL(f); 
     }