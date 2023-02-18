import { rejects } from 'assert';
import { useFormikContext } from 'formik';
import { resolve } from 'path';
import React, { ChangeEvent, useState } from 'react'



export default  function ImageField (props: imageFieldProps) {

    const [imageBase64, setImageBase64] = useState('');
    const [imageURL, setImageURL] = useState(props.imageURL);
    const {values} = useFormikContext<any>();

    const divStyle = {marginTop : '10px'};
    const imgStyle = {width : '450px'};

    const handleChange = (eventArgs: ChangeEvent<HTMLInputElement>) => {
    if(eventArgs.currentTarget.files){
        const file = eventArgs.currentTarget.files[0];
        if(file){
              toBase64(file)
              .then((base64Representaion : string) => setImageBase64(base64Representaion))
              .catch(error => console.error(error));
              values[props.field] = file;
              setImageURL('');       
        } else {
            setImageBase64('');
        }
    }
}


const toBase64 = (file:File) =>{
    return new Promise<string>((resolve, rejects) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => rejects(error);
        
    })
}

  return (
    <div className="mb-3">
      <label>{props.displayName}</label>
      <div>
        <input type="file" accept=".jpg, .jpeg, .png " onChange={handleChange}/>
    </div>
    {imageBase64 ?
     <div>
            <div style={divStyle}>
                <img style={imgStyle} src={imageBase64} alt="selected" />
            </div>
         </div> : null
         }
          {imageURL ?
     <div>
            <div style={divStyle}>
                <img style={imgStyle} src={imageURL} alt="selected" />
            </div>
         </div> : null
         }
    </div>
    
  )
}


interface imageFieldProps{
    displayName : string;
    imageURL: string;
    field: string;
}

ImageField.defaultProps ={
    imageURL: ''
}