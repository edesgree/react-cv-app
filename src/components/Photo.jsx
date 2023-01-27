import React from 'react';
import PhotoExample from '../assets/photo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Photo(props) {
  const [photoUrl, setPhotoUrl] = React.useState(
    localStorage.getItem('photo') || PhotoExample
  );
  const imageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      localStorage['photo'] = base64;
      setPhotoUrl(base64);
      console.debug('file stored', base64);
    });
    console.log('image was uploaded');
  };
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  return (
    <div className="user-photo">
      <label forhtml="imageFile">
        <img width="250" src={photoUrl} alt="" />

        <input
          type="file"
          id="imageFile"
          name="imageFile"
          onInput={imageUpload}
          className="is-hidden"
        />
      </label>
    </div>
  );
}
